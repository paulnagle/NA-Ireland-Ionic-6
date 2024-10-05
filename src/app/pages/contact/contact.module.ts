import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactPageRoutingModule } from './contact-routing.module';

import { ContactPage } from './contact.page';
import { TranslateModule } from '@ngx-translate/core';
import { ServiceGroupsService } from 'src/app/services/service-groups.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactPageRoutingModule,
    TranslateModule
  ],
  providers: [ServiceGroupsService],
  declarations: [ContactPage]
})
export class ContactPageModule {}
