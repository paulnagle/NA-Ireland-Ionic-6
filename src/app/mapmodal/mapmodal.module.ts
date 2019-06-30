import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MapmodalPage } from './mapmodal.page';

const routes: Routes = [
  {
    path: '',
    component: MapmodalPage
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
    MapmodalPage
  ],
  entryComponents: [
    MapmodalPage
  ]
})
export class MapmodalPageModule { }
