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

  sourceCodeLink = 'https://github.com/paulnagle/NA-Ireland-Ionic-4';
  sourceBugs = 'https://github.com/paulnagle/NA-Ireland-Ionic-4/issues';
  bmltLink = 'https://bmlt.app/';
  fbGroupLink = 'https://www.facebook.com/groups/149214049107349/';

  constructor(
    private ServiceGroupsProvider: ServiceGroupsProviderService,
    public loadingCtrl: LoadingService
  ) { }

  ngOnInit() {
    this.loadingCtrl.present('Loading details...');
    this.getServiceGroupContactDetails();
  }

  getServiceGroupContactDetails() {
    this.ServiceGroupsProvider.getAllServiceGroups().subscribe((serviceGroupData) => {
      this.serviceGroupNames = serviceGroupData;
      this.loadingCtrl.dismiss();
    });
  }

  public openLink(url) {
    window.open(url, '_system');
  }

}
