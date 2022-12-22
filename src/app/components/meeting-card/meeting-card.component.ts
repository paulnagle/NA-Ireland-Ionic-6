import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-meeting-card',
  templateUrl: './meeting-card.component.html',
  styleUrls: ['./meeting-card.component.scss'],
})
export class MeetingCardComponent implements OnInit, AfterContentInit {

  @Input() data;
  @Input() MeetingType;

  meeting;
  meetingType;

  constructor(
    private iab: InAppBrowser,
    private translate: TranslateService) { }

  ngOnInit() {}

  ngAfterContentInit() {
    this.meeting = this.data;
    this.meetingType = this.MeetingType;
  }
  public openMapsLink(destLatitude, destLongitude) {
    const browser = this.iab.create('https://www.google.com/maps/search/?api=1&query=' + destLatitude + ',' + destLongitude, '_system');
  }

  public openLink(url) {
    const browser = this.iab.create(url, '_system');
  }

  public dialNum(url) {
    const telUrl = 'tel:' + url;
    window.open(telUrl);
    // const browser = this.iab.create(telUrl, '_system');
  }

  isHybrid(meeting) {
    if (meeting.formats.match(/HY/i)) {
      return 'HYBRID';
    } else {
      return 'NOT-HYBRID';
    }
  }

  isTempClosed(meeting) {
    if (meeting.formats.match(/TC/i) && meeting.formats.match(/VM/i)) {
      return 'TEMPREPLACE';
    } else
    if ( meeting.formats.match(/TC/i) ) {
      return 'TEMPCLOSED';
    } else {
      return 'NOT-TEMPCLOSED';
    }
  }
  
  getMeetingType(meeting) {
    if ( meeting.formats === "" ) {
      return "INPERSON";
    } else if ( !meeting.formats.includes("VM") && !meeting.formats.includes("TC") && !meeting.formats.includes("HY") ) {
      return "INPERSON";
    } else if ( meeting.formats.includes("VM") && !meeting.formats.includes("TC") && !meeting.formats.includes("HY") ) {
      return "VIRTUAL";
    } else if ( meeting.formats.includes("VM") && meeting.formats.includes("TC") && !meeting.formats.includes("HY") ) {
      return 'TEMPREPLACE';
    } else if ( !meeting.formats.includes("VM") && !meeting.formats.includes("TC") && meeting.formats.includes("HY") ) {
      return "HYBRID";
    } else if ( meeting.formats.includes("VM") && !meeting.formats.includes("TC") && meeting.formats.includes("HY") ) {
      return "HYBRID";
    } else if ( !meeting.formats.includes("VM") && meeting.formats.includes("TC") && !meeting.formats.includes("HY")) {
      return "TEMPCLOSED"
    }
  }

}
