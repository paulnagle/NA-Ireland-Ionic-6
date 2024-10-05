import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../../services/wordpress.service';
import { LoadingService } from '../../services/loading.service';
import { TranslateService } from '@ngx-translate/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  eventsData!: any;
  loadingText!: any;

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
      console.log(this.eventsData);
      this.loadingCtrl.dismiss();
    });
  }

  public openLink(url: any) {
    const browser = Browser.open({url: url});
  }


}
