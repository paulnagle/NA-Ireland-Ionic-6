import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  language: string;
  timeDisplay: string;
  distanceUnit: string;

  constructor(
    private storage: Storage,
    private translate: TranslateService
  ) { }

  ngOnInit() {

    this.storage.get('language')
      .then(langValue => {
        if (langValue) {
          this.language = langValue;
        } else {
          this.language = 'en';
        }
      });

    this.storage.get('timeDisplay')
      .then(timeDisplay => {
        if (timeDisplay) {
          this.timeDisplay = timeDisplay;
        } else {
          this.timeDisplay = '24hr';
        }
      });

    this.storage.get('distanceUnit')
      .then(distanceUnit => {
        if (distanceUnit) {
          this.distanceUnit = distanceUnit;
        } else {
          this.distanceUnit = 'kms';
        }
      });

  }

  selectLanguage() {
    this.storage.set('language', this.language);
    this.translate.setDefaultLang(this.language);
    this.translate.use(this.language);
  }

  selectTimeDisplay() {
    this.storage.set('timeDisplay', this.timeDisplay);
  }

  selectDistanceUnit() {
    this.storage.set('distanceUnit', this.distanceUnit);
  }

}
