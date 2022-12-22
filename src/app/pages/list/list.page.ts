import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from '../../services/storage.service';
import { LoadingService } from '../../services/loading.service';
import { ServiceGroupsProviderService } from '../../services/service-groups-provider.service';
import { MeetingListProviderService } from '../../services/meeting-list-provider.service';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { firstBy } from 'thenby';


@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage {

  serviceGroups: any;
  serviceGroupHierarchy: any = [];
  meetingListCounties;
  uniqueCounties;
  shownDay = null;
  shownGroupL1 = null;
  shownGroupL2 = null;
  shownGroupL3 = null;
  shownGroupL4 = null;
  HTMLGrouping = 'counties';
  loader = null;
  meetingListArea: any = [];
  meetingListCounty: any = [];
  areaName: any = '';
  countyName: any = '';
  isLoaded = false;

  constructor(
    private meetingListProvider: MeetingListProviderService,
    private serviceGroupsProvider: ServiceGroupsProviderService,
    private loaderCtrl: LoadingService,
    private translate: TranslateService,
    private storage: StorageService,
    private iab: InAppBrowser) {

    this.translate.get('FINDING_MTGS').subscribe(value => { this.presentLoader(value); })

    this.meetingListProvider.getCounties().subscribe((data) => {

      if (JSON.stringify(data) === '{}') {  // empty result set!
        this.meetingListArea = JSON.parse('[]');
      } else {
        this.meetingListCounties = data;
        console.log(this.meetingListCounties);
        this.isLoaded = true;
        for (let i = 0; i < this.meetingListCounties.length; i++) {
          if (this.meetingListCounties[i].location_sub_province == "") {
            console.log("Found a virt mtg");
            this.meetingListCounties[i].location_sub_province = "Online";
          }
        }
        this.uniqueCounties =( [...new Set(this.meetingListCounties.map(({location_sub_province})=>location_sub_province))]);
      }
      this.dismissLoader();
    });

  }

  getMeetingsByCounty(countyName) {
    this.translate.get('FINDING_MTGS').subscribe(value => { this.presentLoader(value); });
    this.HTMLGrouping = 'meetings';
    this.countyName = countyName;
    this.meetingListProvider.getAllMeetings().subscribe((data) => {

      if (JSON.stringify(data) === '{}') {  // empty result set!
        this.meetingListCounty = JSON.parse('[]');
      } else {
        this.meetingListCounty = data;
        if (countyName == "Online") {
          this.meetingListCounty = this.meetingListCounty.filter(meeting => meeting.location_sub_province == "");
        } else {
          this.meetingListCounty = this.meetingListCounty.filter(meeting => meeting.location_sub_province == countyName);
        }
        this.isLoaded = true;
      }
      this.dismissLoader();
    });
  }

  presentLoader(loaderText: any) {
    if (!this.loader) {
      this.loader = this.loaderCtrl.present(loaderText);
    }
  }

  dismissLoader() {
    if (this.loader) {
      this.loader = this.loaderCtrl.dismiss();
      this.loader = null;
    }
  }

  showCountyStructure() {
    this.HTMLGrouping = 'counties';
    this.countyName = '';
    this.shownDay = null;
  }

}
