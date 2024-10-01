import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JftPageRoutingModule } from './jft-routing.module';

import { JftPage } from './jft.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JftPageRoutingModule
  ],
  declarations: [JftPage]
})
export class JftPageModule {}
