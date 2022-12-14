import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListPageRoutingModule } from './list-routing.module';
import { ListPage } from './list.page';
import { TranslateModule } from '@ngx-translate/core';
import { StorageService } from 'src/app/services/storage.service';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPageRoutingModule,
    TranslateModule
  ],
  declarations: [ListPage],
  providers: [
    StorageService,
    InAppBrowser
  ]
})
export class ListPageModule {}
