import { Component, OnInit } from '@angular/core';
import { AudioService } from '../service/audio.service';
import { LoadingService } from '../service/loading.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Insomnia } from '@ionic-native/insomnia/ngx';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.page.html',
  styleUrls: ['./speakers.page.scss'],
})

export class SpeakersPage implements OnInit {

  conventionList: any;

  constructor(
    private insomnia: Insomnia,
    private theInAppBrowser: InAppBrowser,
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

  openWithInAppBrowser(url: string) {
    const target = '_blank';
    const browser = this.theInAppBrowser.create(url, target, 'location=no');
    this.insomnia.keepAwake();
    browser.on('exit').subscribe((ev) => {
      this.insomnia.allowSleepAgain();
    });

    browser.show();
    console.log(url);
  }

}
