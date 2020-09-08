import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { MeetingListProviderService } from '../service/meeting-list-provider.service';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-mapmodal',
  templateUrl: './mapmodal.page.html',
  styleUrls: ['./mapmodal.page.scss']
})

export class MapmodalPage implements OnInit {

  timeDisplay: any;
  text: string;
  title: string;
  meetingList: any;

  constructor(
    private translate: TranslateService,
    private storage: Storage,
    private MeetingListProvider: MeetingListProviderService,
    private navParams: NavParams,
    private modalController: ModalController) {
    console.log('mapModal constructor');
    this.storage.get('timeDisplay')
      .then(timeDisplay => {
        if (timeDisplay) {
          this.timeDisplay = timeDisplay;
        } else {
          this.timeDisplay = '24hr';
        }
      });
    this.meetingList = this.navParams.data.data;
  }

  ngOnInit() {
  }

  async dismiss() {
    await this.modalController.dismiss();
  }

  public openMapsLink(destLatitude: string, destLongitude: string) {
    window.open('https://www.google.com/maps/search/?api=1&query=' + destLatitude + ',' + destLongitude + ')', '_system');
  }

  public openLink(url) {
    window.open(url, '_system');
  }

  public dialNum(url) {
    const telUrl = 'tel:' + url;
    window.open(telUrl, '_system');
  }

  isHybrid(meeting) {
    if (meeting.formats.match(/HY/i)) {
      return true;
    } else {
      return false;
    }
  }

  isTempClosed(meeting) {
    if (meeting.formats.match(/TC/i) || meeting.formats.match(/C19/i)) {
      return true;
    } else {
      return false;
    }
  }

}
