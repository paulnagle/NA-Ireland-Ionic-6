import { Component } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';

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
    private router: Router,
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

      this.statusBar.overlaysWebView(false);
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#ffffff');
      this.splashScreen.hide();
      this.setupPush();
    });
  }

  setupPush() {
    const oneSignalIosAppId = environment.oneSignalIosId;
    const oneSignalAndroidSenderId = environment.oneSignalAndroidSenderId;
    this.oneSignal.startInit(oneSignalIosAppId, oneSignalAndroidSenderId);

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);

    // Notifcation was received in general
    this.oneSignal.handleNotificationReceived().subscribe(data => {
      const msg = data.payload.body;
      const title = data.payload.title;
      const additionalData = data.payload.additionalData;
      this.showAlert(title, msg, additionalData.task);
    });

    // Notification was clicked/opened
    this.oneSignal.handleNotificationOpened().subscribe(data => {
      const additionalData = data.notification.payload.additionalData;

      this.showAlert('NA Ireland', data.notification.payload.body, additionalData.task);
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
            this.router.navigateByUrl('/events');
          }
        }
      ]
    });
    alert.present();
  }
}
