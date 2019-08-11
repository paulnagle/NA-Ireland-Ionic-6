import { Component, OnInit } from '@angular/core';
import { ServiceGroupsProviderService } from '../service/service-groups-provider.service';
import { LoadingService } from '../service/loading.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  loader = null;
  serviceGroupNames: any;

  constructor(
    private ServiceGroupsProvider: ServiceGroupsProviderService,
    public loadingCtrl: LoadingService
  ) {
    this.getServiceGroupContactDetails();
  }

  getServiceGroupContactDetails() {
    this.ServiceGroupsProvider.getAllServiceGroups().subscribe((serviceGroupData) => {
      this.serviceGroupNames = serviceGroupData;

    });
  }

  public openLink(url) {
    window.open(url, '_system');
  }

  ngOnInit() {
  }

}
