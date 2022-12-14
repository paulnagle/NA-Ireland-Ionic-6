import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SpeakersPageRoutingModule } from './speakers-routing.module';
import { SpeakersPage } from './speakers.page';
import { TranslateModule } from '@ngx-translate/core';
import { StorageService } from 'src/app/services/storage.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpeakersPageRoutingModule,
    TranslateModule
  ],
  declarations: [SpeakersPage],
  providers: [StorageService]
})
export class SpeakersPageModule {}
