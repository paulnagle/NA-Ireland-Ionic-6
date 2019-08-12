import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import { EventsPage } from './events.page';
import { WordpressService } from '../service/wordpress.service';

const routes: Routes = [
  {
    path: '',
    component: EventsPage
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
  declarations: [
    EventsPage
  ],
  providers: [
    HTTP,
    WordpressService
  ]
})
export class EventsPageModule { }
