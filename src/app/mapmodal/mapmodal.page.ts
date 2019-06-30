import { Component } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { MeetingListProviderService } from '../service/meeting-list-provider.service';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-mapmodal',
  templateUrl: './mapmodal.page.html',
  styleUrls: ['./mapmodal.page.scss'],
})

export class MapmodalPage {

  timeDisplay: any;
  text: string;
  title: string;
  meetingList: any;

  constructor(
    private translate: TranslateService,
    private navParams: NavParams,
    private storage: Storage,
    private MeetingListProvider: MeetingListProviderService,
    private modalController: ModalController) {
    this.storage.get('timeDisplay')
      .then(timeDisplay => {
        if (timeDisplay) {
          this.timeDisplay = timeDisplay;
        } else {
          this.timeDisplay = '24hr';
        }
      });
    this.meetingList = this.navParams.get('data');
  }

  private dismiss() {
    this.modalController.dismiss();
  }

  public openMapsLink(destLatitude: string, destLongitude: string) {
    window.open('https://www.google.com/maps/search/?api=1&query=' + destLatitude + ',' + destLongitude + ')', '_system');
  }


}
