import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalPageRoutingModule } from './modal-routing.module';
import { ModalPage } from './modal.page';

import { TranslateModule } from '@ngx-translate/core';
import { StorageService } from 'src/app/services/storage.service';

import { ComponentModule } from '../../components/component/component.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPageRoutingModule,
    TranslateModule,
    ComponentModule
  ],
  declarations: [ModalPage]
})
export class ModalPageModule {}
