import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'settings'
    },
    {
      title: 'Meeting List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Map Search',
      url: '/map',
      icon: 'map'
    },
    {
      title: 'Just For Today',
      url: '/jft',
      icon: 'book'
    },
    {
      title: 'Cleantime Calculator',
      url: '/datetime',
      icon: 'calculator'
    },
    {
      title: 'Speakers',
      url: '/speakers',
      icon: 'microphone'
    },
    {
      title: 'Events',
      url: '/events',
      icon: 'calendar'
    },
    {
      title: 'Contact',
      url: '/contact',
      icon: 'contact'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService,
    private storage: Storage
  ) {
    this.initializeApp();
    this.translate.setDefaultLang('en');
    storage.get('language').then((value) => {
      if (value) {
        this.translate.use(value);
      } else {
        this.translate.use('en');
        storage.set('language', 'en');
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
