import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MapSearchPageRoutingModule } from './map-search-routing.module';
import { MapSearchPage } from './map-search.page';
import { TranslateModule } from '@ngx-translate/core';
import { Base64 } from '@ionic-native/base64/ngx';
import { ModalPage } from '../modal/modal.page';
import { Routes } from '@angular/router';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { MeetingListProviderService } from '../../services/meeting-list-provider.service';
import { ComponentModule } from '../../components/component/component.module';
import { StorageService } from '../../services/storage.service'; 

const routes: Routes = [
  {
    path: '',
    component: MapSearchPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    MapSearchPageRoutingModule,
    ComponentModule
  ],
  declarations: [
    MapSearchPage,
    ModalPage
  ],
  entryComponents: [
    ModalPage
  ],
  providers: [
    Base64,
    InAppBrowser,
    MeetingListProviderService,
    StorageService
  ]
})
export class MapSearchPageModule {}
