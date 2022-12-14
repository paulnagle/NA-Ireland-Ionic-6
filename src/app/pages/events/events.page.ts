import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../../services/wordpress.service';
import { LoadingService } from '../../services/loading.service';
import { TranslateService } from '@ngx-translate/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  eventsData;
  loadingText;

  constructor(
    public loadingCtrl: LoadingService,
    public wp: WordpressService,
    private translate: TranslateService,
    private iab: InAppBrowser
  ) { }

  ngOnInit() {
    this.translate.get('CONTACT.LOADING').subscribe(value => {
      this.loadingText = value;
    });
    this.loadingCtrl.present(this.loadingText);
    this.getEvents();
  }

  public getEvents() {
    this.wp.getEvents().then((data) => {
      this.eventsData = data;
      this.loadingCtrl.dismiss();
    });
  }

  public openLink(url) {
    let browser = this.iab.create(url, '_system');
  }
}
