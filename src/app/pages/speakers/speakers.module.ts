import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SpeakersPageRoutingModule } from './speakers-routing.module';
import { SpeakersPage } from './speakers.page';
import { TranslateModule } from '@ngx-translate/core';
import { StorageService } from 'src/app/services/storage.service';
import { AudioService } from '../../services/audio.service';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { Insomnia } from '@awesome-cordova-plugins/insomnia/ngx';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpeakersPageRoutingModule,
    TranslateModule
  ],
  declarations: [SpeakersPage],
  providers: [
    AudioService,
    HTTP,
    Insomnia,
    InAppBrowser
  ]
})
export class SpeakersPageModule {}
