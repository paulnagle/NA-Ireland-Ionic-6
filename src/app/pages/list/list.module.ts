import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListPageRoutingModule } from './list-routing.module';
import { ListPage } from './list.page';

import { TranslateModule } from '@ngx-translate/core';
import { MeetingListService } from 'src/app/services/meeting-list.service';
import { ServiceGroupsService } from  'src/app/services/service-groups.service';
import { StorageService } from 'src/app/services/storage.service';

import { ComponentModule } from 'src/app/components/component/component.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ComponentModule,
    ListPageRoutingModule
  ],
  declarations: [
    ListPage
  ],
  providers: [
    MeetingListService,
    ServiceGroupsService,
    StorageService
  ]
})
export class ListPageModule {}
