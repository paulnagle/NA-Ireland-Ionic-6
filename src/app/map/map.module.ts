import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Base64 } from '@ionic-native/base64/ngx';

import { IonicModule } from '@ionic/angular';
import { MapmodalPage } from '../mapmodal/mapmodal.page';
import { MapPage } from './map.page';

const routes: Routes = [
  {
    path: '',
    component: MapPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MapPage,
    MapmodalPage
  ],
  entryComponents: [
    MapmodalPage
  ],
  providers: [
    Base64
  ]
})
export class MapPageModule { }
