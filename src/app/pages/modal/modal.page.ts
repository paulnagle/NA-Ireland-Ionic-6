import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavParams, ModalController } from '@ionic/angular';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { TomatoFormatsService } from '../../services/tomato-formats.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  text: string;
  title: string;
  meetingList: any;
  formatLanguage = 'en';

  constructor(
    private translate: TranslateService,
    private navParams: NavParams,
    private modalController: ModalController,
    private iab: InAppBrowser,
    private tomatoFormatsService: TomatoFormatsService,
    private storage: StorageService) {

    this.meetingList = this.navParams.data.data;
  }

  ngOnInit() {
    this.storage.get('language').then((value) => {
      if (value) {
        this.formatLanguage = value;
      }
    });

    this.tomatoFormatsService.setExplodedFormatsOnMeetingList(this.meetingList, this.formatLanguage);
  }

  async dismiss() {
    await this.modalController.dismiss();
  }

  public openMapsLink(destLatitude, destLongitude) {
    const browser = this.iab.create('https://www.google.com/maps/search/?api=1&query=' + destLatitude + ',' + destLongitude, '_system');
  }

  public openLink(url) {
    const browser = this.iab.create(url, '_system');
  }

  public dialNum(url) {
    const telUrl = 'tel:' + url;
    const browser = this.iab.create(telUrl, '_system');
  }

  isHybrid(meeting) {
    if (meeting.formats.match(/HY/i)) {
      return 'HYBRID';
    } else {
      return 'NOT-HYBRID';
    }
  }

  isTempClosed(meeting) {
    if (meeting.formats.match(/TC/i)) {
      return 'TEMPCLOSED';
    } else {
      return 'NOT-TEMPCLOSED';
    }
  }

  explodeFormats(meeting) {
    console.log("exploding formats")
    this.tomatoFormatsService.setExplodedFormatsOnMeetingList([meeting], this.formatLanguage);
  }
}
