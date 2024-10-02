import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavParams, ModalController } from '@ionic/angular';
import { Browser } from '@capacitor/browser';
import { TomatoFormatsService } from '../../services/tomato-formats.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  text!: string;
  title!: string;
  meetingList: any;
  formatLanguage = 'en';

  constructor(
    private translate: TranslateService,
    private navParams: NavParams,
    private modalController: ModalController,
    private tomatoFormatsService: TomatoFormatsService,
    private storage: StorageService) {
      this.meetingList = this.navParams.data['data'];
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

  public openMapsLink(destLatitude: string, destLongitude: string) {
    Browser.open({url: 'https://www.google.com/maps/search/?api=1&query=' + destLatitude + ',' + destLongitude});
  }

  public openLink(url: any) {
    Browser.open({url: url});
  }

  public dialNum(url: string) {
    const telUrl = 'tel:' + url;
    Browser.open({url: telUrl});
  }

  isHybrid(meeting: { formats: string; }) {
    if (meeting.formats.match(/HY/i)) {
      return 'HYBRID';
    } else {
      return 'NOT-HYBRID';
    }
  }

  isTempClosed(meeting: { formats: string; }) {
    if (meeting.formats.match(/TC/i)) {
      return 'TEMPCLOSED';
    } else {
      return 'NOT-TEMPCLOSED';
    }
  }

  explodeFormats(meeting: any) {
    this.tomatoFormatsService.setExplodedFormatsOnMeetingList([meeting], this.formatLanguage);
  }
}
