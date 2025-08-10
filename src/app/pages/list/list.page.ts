import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from '../../services/storage.service';
import { LoadingService } from '../../services/loading.service';
import { ServiceGroupsService } from '../../services/service-groups.service';
import { MeetingListService } from '../../services/meeting-list.service';
import { firstBy } from 'thenby';
import { HttpResponse } from '@capacitor/core';
import * as _ from 'lodash'; 

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: false
})
export class ListPage {

  serviceGroups: any;
  serviceGroupHierarchy: any = [];
  HTMLGrouping = 'counties';
  loader!: Promise<void> | Promise<boolean> | null;
  fullMeetingList: any = [];
  areaName: any = '';
  isLoaded = false;
  unique_counties: any;
  county_list: any;
  meetingListArea: any = [];
  meetingListCounty: any = [];
  countyName: string = '';

  constructor(
    private meetingListService: MeetingListService,
    private serviceGroupsService: ServiceGroupsService,
    private loaderCtrl: LoadingService,
    private translate: TranslateService,
    private storage: StorageService) {


    this.getAllCounties()

  }

  getAllCounties() {
    this.translate.get('FINDING_MTGS').subscribe(value => { this.presentLoader(value); });

    this.meetingListService.getAllCounties().then((response: HttpResponse) => {

      if (JSON.stringify(response.data) === '{}') {  // empty result set!
        this.county_list = JSON.parse('[]');
      } else {
        this.county_list = response.data;

        var uniqueNames = [];
        for(var i = 0; i< this.county_list.length; i++){    
            if(uniqueNames.indexOf(this.county_list[i].location_sub_province) === -1){
                uniqueNames.push(this.county_list[i].location_sub_province);        
            }       

        }
        this.county_list=uniqueNames;
        Object.keys(this.county_list).forEach(k => this.county_list[k] = this.county_list[k] === '' ? 'Online' : this.county_list[k])
        this.county_list.sort() 
        this.isLoaded = true;
      }
      this.dismissLoader();
    });

  }

  getMeetingsByCounty(countyName: string) {
    this.translate.get('FINDING_MTGS').subscribe(value => { this.presentLoader(value); });
    this.HTMLGrouping = 'meetings';
    this.countyName = countyName;
    if (countyName == "Online") {
      countyName = "";
    }

    this.meetingListService.getMeetingsByCounty(countyName).then((response: HttpResponse) => {

      if (JSON.stringify(response.data) === '{}') {  // empty result set!
        this.meetingListCounty = JSON.parse('[]');
      } else {
        this.meetingListCounty = response.data;
        if (countyName == "") {
          console.log("Online mtgs");
          // this.meetingListCounty = this.meetingListCounty.filter((meeting: any) => meeting.location_sub_province == "");
          // this.meetingListCounty.find((x: any) => x.location_sub_province == "")
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
    // this.shownDay = null;
  }


}
