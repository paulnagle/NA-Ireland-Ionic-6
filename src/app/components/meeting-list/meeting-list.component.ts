import { Component, OnInit, Input, OnChanges, ViewChild } from '@angular/core';
import { IonAccordionGroup } from '@ionic/angular';
import { firstBy } from 'thenby';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { VirtFormatsService } from '../../services/virt-formats.service';
import { TomatoFormatsService } from '../../services/tomato-formats.service';
import { MeetingListService } from '../../services/meeting-list.service';
import { LoadingService } from 'src/app/services/loading.service';
import moment from 'moment';
import 'moment-timezone';
import { RangeCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.scss'],
  standalone: false
})
export class MeetingListComponent implements OnInit, OnChanges {

  @ViewChild('accordionGroup', { static: true }) accordionGroup!: IonAccordionGroup;

  @Input() data: any;
  @Input() meetingType: any;
  @Input() expandAll: any;

  meetingList: any = [];
  savedList: any = [];
  meetingListGroupedByDay: any;
  shownDay = null;
  meetingsListGrouping = 'weekday_tinyint';
  timeDisplay: any;
  localMeetingType: any;
  localExpandAll: any;
  dayCount = [0, 0, 0, 0, 0, 0, 0];
  formats: any;
  formatLanguage = 'en';
  language = 'english';
  selectedDay = 'Weekdays';
  loader!: Promise<void> | Promise<boolean> | null;
  isLoaded = false;

  days = ['Weekdays', 'SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
  hourRangeValues: any = {
    upper: 23,
    lower: 0
  };

  displayUpper = '00:00 (12:00 am)';
  displayLower = '23:59 (11:59 pm)';

  constructor(
    private storage: Storage,
    private translate: TranslateService,
    private virtFormatsProvider: VirtFormatsService,
    private meetingListProvider: MeetingListService,
    private tomatoFormatsService: TomatoFormatsService,
    private loaderCtrl: LoadingService
    ) { }


  ngOnChanges() {
    this.ngOnInit();
  }


  ngOnInit() {
    this.storage.get('language').then((value) => {
      if (value) {
        this.formatLanguage = value;
      }
    });

    this.meetingList = this.data;
    this.localMeetingType = this.meetingType;
    this.localExpandAll = this.expandAll;

    if (this.localExpandAll === "false") {
      this.accordionGroup.value = undefined;
      this.accordionGroup.multiple = undefined;
    } else {
      this.accordionGroup.value = ['1', '2', '3', '4', '5', '6', '7'];
      this.accordionGroup.multiple = true;
    }

    if (this.localMeetingType === 'virt') {
      // Get the formats
      this.virtFormatsProvider.getAllVirtFormats().then((serviceGroupData: any) => {
        this.formats = serviceGroupData;
        this.formatMeetingList();
      });
    } else {
      this.formatMeetingList();
    }

  }


  formatMeetingList() {
    for (let i = 0; i < 7; i++) {
      this.dayCount[i] = this.meetingList.filter((list: { weekday_tinyint: string; }) => parseInt(list.weekday_tinyint, 10) === i + 1).length;
    }
    this.meetingListGroupedByDay = this.meetingList.concat();
    this.explodeFormats();
    this.setRawStartTime();
    this.meetingListGroupedByDay.sort((a: { weekday_tinyint: string; }, b: { weekday_tinyint: any; }) => a.weekday_tinyint.localeCompare(b.weekday_tinyint));
    this.savedList = this.meetingListGroupedByDay;
    this.meetingListGroupedByDay = this.groupMeetingList(this.meetingListGroupedByDay, this.meetingsListGrouping);
    for (let i of this.meetingListGroupedByDay) {
      i.sort(firstBy('weekday_tinyint').thenBy('start_time')
      );
    }
  }


  explodeFormats() {
    if (this.localMeetingType === 'virt') {

      for (let i of this.meetingListGroupedByDay) {
        const splitFormats = i.formats.split(',');
        i.formats_exploded = '';
        for (let j of splitFormats) {
          const longFormat = this.formats.filter((data: { key_string: any; }) => data.key_string === j);
          if (longFormat[0]) {
            i.formats_exploded += longFormat[0].name_string + '. ';
          } else {
            i.formats_exploded += j + '. ';
          }
        }
      }
    } else {
      if (this.localMeetingType === 'regular') {
        this.tomatoFormatsService.setExplodedFormatsOnMeetingList(this.meetingListGroupedByDay, this.formatLanguage);
      }
    }
  }


  private groupMeetingList(meetingList: any[], groupingOption: string) {
    // A function to convert a flat json list to an javascript array
    const groupJSONList = function (inputArray: any[], key: string) {
      return inputArray.reduce(function (ouputArray: { [x: string]: any[]; }, currentValue: { [x: string]: string | number; }) {
        (ouputArray[currentValue[key]] = ouputArray[currentValue[key]] || []).push(currentValue);
        return ouputArray;
      }, {});
    };
    // Convert the flat json to an array grouped by and indexed by the meetingsListGroupingOne field,
    const groupedByGroupingOne = groupJSONList(meetingList, groupingOption);

    // Make the array a proper javascript array, index by number
    const groupedByGroupingOneAsArray = Object.keys(groupedByGroupingOne).map(function (key) {
      return groupedByGroupingOne[key];
    });

    meetingList = groupedByGroupingOneAsArray;
    return meetingList;
  }


  isExpandAll() {
    if (this.localExpandAll == "true") {
      return true;
    } else {
      return false;
    }
  }


  public isToday(dayOfWeek: string) {
    const d = new Date();
    const n = d.getDay();
    if (parseInt(dayOfWeek, 10) === (n + 1)) {
      return true;
    } else {
      return false;
    }
  }


  setRawStartTime() {
    for (let meeting of this.meetingListGroupedByDay) {
      if (this.localMeetingType === 'virt') {
        const startTimeRaw = this.getAdjustedDateTime(
          parseInt(meeting.weekday_tinyint, 10) === 1 ? 7 : parseInt(meeting.weekday_tinyint, 10) - 1,
          meeting.start_time,
          meeting.time_zone
        );

        meeting.start_time_moment = startTimeRaw;
        meeting.start_time_raw = startTimeRaw.format('HH:mm (hh:mm a)');

        const timeZoneName = moment.tz.guess();
        meeting.start_time_raw += ' (' + timeZoneName + ' )';
      } else {
        meeting.start_time_moment = moment({
          hour: meeting.start_time.split(':')[0],
          minute: meeting.start_time.split(':')[1],
          second: 0
        }).isoWeekday(parseInt(meeting.weekday_tinyint, 10) === 1 ? 7 : parseInt(meeting.weekday_tinyint, 10) - 1);

        meeting.start_time_raw = this.convertTo12Hr(meeting.start_time);
      }
    }
  }


  getAdjustedDateTime(meetingDay: number, meetingTime: string, meetingTimeZone: string) {
    let meetingDateTimeObj;

    if (!meetingTimeZone) {
      meetingTimeZone = 'IST';
    }

    // Get an object that represents the meeting in its time zone
    meetingDateTimeObj = moment.tz(meetingTimeZone).set({
      hour: Number(meetingTime.split(':')[0]),
      minute: Number(meetingTime.split(':')[1]),
      second: 0
    }).isoWeekday(meetingDay);

    // Convert meeting to target (local) time zone
    meetingDateTimeObj = meetingDateTimeObj.clone().tz(moment.tz.guess());

    const now = moment.tz(moment.tz.guess());
    if (now > meetingDateTimeObj || now.isoWeekday() === meetingDateTimeObj.isoWeekday()) {
      meetingDateTimeObj.add(1, 'weeks');
    }

    return meetingDateTimeObj;
  }


  public convertTo12Hr(timeString: string) {
    const H = +timeString.substr(0, 2);
    const h = H % 12 || 12;
    const ampm = (H < 12 || H === 24) ? ' am' : ' pm';
    timeString = h + timeString.substr(2, 3) + ampm;
    return timeString;
  }


  public setDay() {
    this.filterMeetings();
  }


  public setHourRangeValues(ev: Event) {

    this.hourRangeValues = (ev as RangeCustomEvent).detail.value

    const upperMoment = moment({
      hour: this.hourRangeValues.upper,
      minute: 59,
      second: 0
    });
    this.displayUpper = upperMoment.format('HH:mm (h:mm a)');

    const lowerMoment = moment({
      hour: this.hourRangeValues.lower,
      minute: 0,
      second: 0
    });
    this.displayLower = lowerMoment.format('HH:mm (h:mm a)');

    this.filterMeetings();
  }


  public filterMeetings() {
    let tempMeetingListGroupedByDay = [];
    tempMeetingListGroupedByDay = this.savedList;

    //  Filter by Day
    if (this.days.indexOf(this.selectedDay) > 0) {
       tempMeetingListGroupedByDay = tempMeetingListGroupedByDay.filter(
         (        meeting: { weekday_tinyint: string; }) => parseInt(meeting.weekday_tinyint, 10) === this.days.indexOf(this.selectedDay)
      );
    }

    // Filter by hour
    let rangeLower = moment(this.hourRangeValues.lower, 'HH');
    let rangeUpper = moment(this.hourRangeValues.upper, 'HH');

    tempMeetingListGroupedByDay = tempMeetingListGroupedByDay.filter(
      (      meeting: { start_time_moment: { hour: () => number; }; }) => meeting.start_time_moment.hour() >= rangeLower.hour() &&
                 meeting.start_time_moment.hour() <= rangeUpper.hour()
    );

    // Count the newly filtered list by day
    for (let i = 0; i < 7; i++) {
      this.dayCount[i] = tempMeetingListGroupedByDay.filter((list: { weekday_tinyint: string; }) => parseInt(list.weekday_tinyint, 10) === i + 1).length;
    }

    // Arrange the list into an array by day
    tempMeetingListGroupedByDay = this.groupMeetingList(tempMeetingListGroupedByDay, this.meetingsListGrouping);

    // Sort each day in the array
    for (let i of tempMeetingListGroupedByDay) {
      i.sort(firstBy('weekday_tinyint').thenBy('start_time_raw'));
    }

    // Overwrite the display list with the newly filtered list
    this.meetingListGroupedByDay = tempMeetingListGroupedByDay;
  }

  public presentLoader(loaderText: any) {
    if (!this.loader) {
      this.loader = this.loaderCtrl.present(loaderText);
    }
  }


  public dismissLoader() {
    if (this.loader) {
      this.loader = this.loaderCtrl.dismiss();
      this.loader = null;
    }
  }

}
