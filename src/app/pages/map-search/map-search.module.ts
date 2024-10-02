import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MapSearchPageRoutingModule } from './map-search-routing.module';
import { MapSearchPage } from './map-search.page';

import { TranslateModule } from '@ngx-translate/core';
import { ModalPage } from '../modal/modal.page';
import { Routes } from '@angular/router';
import { MeetingListService } from 'src/app/services/meeting-list.service';
import { StorageService } from 'src/app/services/storage.service';
import { GeocodeService } from 'src/app/services/geocode.service';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    MapSearchPageRoutingModule
  ],
  declarations: [
    MapSearchPage
  ],
  providers: [
    MeetingListService,
    StorageService,
    GeocodeService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MapSearchPageModule {}
