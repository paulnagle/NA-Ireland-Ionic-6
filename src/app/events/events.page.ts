import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../service/wordpress.service';
import { LoadingService } from '../service/loading.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  eventsData;

  constructor(
    public loadingCtrl: LoadingService,
    public wp: WordpressService) { }

  ngOnInit() {
    this.loadingCtrl.present('Loading Events...');
    this.getEvents();
  }

  public getEvents() {
    this.wp.getEvents().then((data) => {
      console.log('Got wp data');
      this.eventsData = data;
      this.loadingCtrl.dismiss();
    });
  }

  public openLink(url) {
    window.open(url, '_system');
  }
}
