import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EventsPageRoutingModule } from './events-routing.module';
import { EventsPage } from './events.page';
import { TranslateModule } from '@ngx-translate/core';
import { StorageService } from 'src/app/services/storage.service';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { WordpressService } from '../../services/wordpress.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsPageRoutingModule,
    EventsPageRoutingModule,
    TranslateModule
  ],
  declarations: [EventsPage],
  providers: [
    StorageService,
    HTTP,
    WordpressService]
})
export class EventsPageModule {}
