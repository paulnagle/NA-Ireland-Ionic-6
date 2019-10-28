import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../service/wordpress.service';
import { LoadingService } from '../service/loading.service';
import { TranslateService } from '@ngx-translate/core';

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
    private translate: TranslateService
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
    window.open(url, '_system');
  }
}
