import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapSearchPageRoutingModule } from './map-search-routing.module';

import { MapSearchPage } from './map-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapSearchPageRoutingModule
  ],
  declarations: [MapSearchPage]
})
export class MapSearchPageModule {}
