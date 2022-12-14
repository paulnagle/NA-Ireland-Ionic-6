import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
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
    private storage: StorageService,
    private translate: TranslateService
  ) { }

  ngOnInit() {

    this.storage.get('language').then((value) => {
      if (value) {
        this.language=value;
        this.translate.use(value);
      } else {
        this.translate.use('en');
        this.storage.set('language', 'en');
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
