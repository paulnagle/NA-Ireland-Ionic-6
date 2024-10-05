import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from './services/storage.service';
import { Router } from '@angular/router';
import { SplashScreen } from '@capacitor/splash-screen';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'HOME', url: '/home', icon: 'home' },
    { title: 'SETTINGS', url: '/settings', icon: 'settings' },
    { title: 'MEETINGLIST', url: '/list', icon: 'list' },
    { title: 'GOOGLE_MAPS', url: '/map-search', icon: 'map' },
    { title: 'JUSTFORTODAY', url: '/jft', icon: 'book' },
    { title: 'DATETIME', url: '/datetime', icon: 'stopwatch' },
    { title: 'SPEAKERS', url: '/speakers', icon: 'mic' },
    { title: 'POSTS', url: '/events', icon: 'calendar' },
    { title: 'CONTACT', url: '/contact', icon: 'people' }
  ];

  constructor(
    private platform: Platform,
    private translate: TranslateService,
    private storage: StorageService,
    private router: Router
  ) {
    this.initializeApp();
  }
  async initializeApp() {
    this.translate.setDefaultLang('en');
    await SplashScreen.hide();

    const langValue = await this.storage.get('language');
    if (langValue) {
      this.translate.use(langValue);
    } else {
      this.translate.use('en');
      this.storage.set('language', 'en');
    }
  }
}
