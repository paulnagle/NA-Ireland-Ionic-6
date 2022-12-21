import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalPageRoutingModule } from './modal-routing.module';
import { ModalPage } from './modal.page';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentModule } from '../../components/component/component.module';
import { StorageService } from '../../services/storage.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPageRoutingModule,
    TranslateModule,
    ComponentModule
  ],
  providers: [
    StorageService
  ]
})
export class ModalPageModule {}
