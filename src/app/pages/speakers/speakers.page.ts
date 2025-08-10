import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../services/audio.service';
import { LoadingService } from '../../services/loading.service';
import { Browser } from '@capacitor/browser';


@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.page.html',
  styleUrls: ['./speakers.page.scss'],
  standalone: false
})
export class SpeakersPage implements OnInit {

  conventionList: any;

  constructor(
    private AudioProvider: AudioService,
    public loadingCtrl: LoadingService
  ) { }

  ngOnInit() {
    this.loadingCtrl.present('Loading Speakers...');
    this.getAllSpeakers();
  }

  getAllSpeakers() {
    this.AudioProvider.getConventions().then((data) => {
      this.conventionList = Array.of(data);
      this.loadingCtrl.dismiss();
    });
  }

  async openWithBrowser(url: string) {
    await Browser.open({url: url});;
  }

}
