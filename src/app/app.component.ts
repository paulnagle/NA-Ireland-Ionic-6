import { Component } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'HOME',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'SETTINGS',
      url: '/settings',
      icon: 'settings'
    },
    {
      title: 'MEETINGLIST',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'GOOGLE_MAPS',
      url: '/map',
      icon: 'map'
    },
    {
      title: 'JUSTFORTODAY',
      url: '/jft',
      icon: 'book'
    },
    {
      title: 'DATETIME',
      url: '/datetime',
      icon: 'stopwatch'
    },
    {
      title: 'SPEAKERS',
      url: '/speakers',
      icon: 'microphone'
    },
    {
      title: 'POSTS',
      url: '/events',
      icon: 'calendar'
    },
    {
      title: 'CONTACT',
      url: '/contact',
      icon: 'contact'
    }
  ];

  constructor(
    private platform: Platform,
    private oneSignal: OneSignal,
    private alertCtrl: AlertController,
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
      this.setupPush();
    });
  }

  setupPush() {
    // I recommend to put these into your environment.ts
    this.oneSignal.startInit('3502dfab-4518-41fb-b0d4-f8f62469115e');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);

    // Notifcation was received in general
    this.oneSignal.handleNotificationReceived().subscribe(data => {
      let msg = data.payload.body;
      let title = data.payload.title;
      let additionalData = data.payload.additionalData;
      this.showAlert(title, msg, additionalData.task);
    });

    // Notification was really clicked/opened
    this.oneSignal.handleNotificationOpened().subscribe(data => {
      // Just a note that the data is a different place here!
      let additionalData = data.notification.payload.additionalData;

      this.showAlert('Notification opened', 'You already read this before', additionalData.task);
    });

    this.oneSignal.endInit();
  }

  async showAlert(title, msg, task) {
    const alert = await this.alertCtrl.create({
      header: title,
      subHeader: msg,
      buttons: [
        {
          text: `Action: ${task}`,
          handler: () => {
            // E.g: Navigate to a specific screen
          }
        }
      ]
    });
    alert.present();
  }
}
