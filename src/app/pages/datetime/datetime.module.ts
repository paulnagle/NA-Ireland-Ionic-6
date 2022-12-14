import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DatetimePageRoutingModule } from './datetime-routing.module';
import { DatetimePage } from './datetime.page';
import { TranslateModule } from '@ngx-translate/core';
import { StorageService } from '../../services/storage.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatetimePageRoutingModule,
    TranslateModule
  ],
  declarations: [DatetimePage],
  providers: [StorageService]
})
export class DatetimePageModule {}
