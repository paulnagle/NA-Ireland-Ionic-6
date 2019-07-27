import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { JftPage } from './jft.page';

const routes: Routes = [
  {
    path: '',
    component: JftPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule
  ],
  providers: [
    HTTP
  ],
  declarations: [JftPage]
})
export class JftPageModule { }
