import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx'
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { StorageService } from './services/storage.service'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public selectedIndex = 0;
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
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService,
    private storage: StorageService
  ) {

    this.translate.setDefaultLang('en');
    this.storage.get('language').then((value) => {
      if (value) {
        this.translate.use(value);
      } else {
        this.translate.use('en');
        this.storage.set('language', 'en');
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);
      this.splashScreen.hide();
    });
  }

}
