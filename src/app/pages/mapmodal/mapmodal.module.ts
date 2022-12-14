import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MapmodalPageRoutingModule } from './mapmodal-routing.module';
import { MapmodalPage } from './mapmodal.page';
import { TranslateModule } from '@ngx-translate/core';
import { StorageService } from 'src/app/services/storage.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapmodalPageRoutingModule,
    TranslateModule
  ],
  declarations: [MapmodalPage],
  providers: [StorageService]
})
export class MapmodalPageModule {}
