import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MapPageRoutingModule } from './map-routing.module';
import { MapPage } from './map.page';
import { TranslateModule } from '@ngx-translate/core';
import { StorageService } from 'src/app/services/storage.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapPageRoutingModule,
    TranslateModule
  ],
  declarations: [MapPage],
  providers: [StorageService]
})
export class MapPageModule {}
