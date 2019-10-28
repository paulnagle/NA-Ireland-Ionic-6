import { Component, OnInit } from '@angular/core';
import { ServiceGroupsProviderService } from '../service/service-groups-provider.service';
import { LoadingService } from '../service/loading.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  loader = null;
  serviceGroupNames: any;
  loadingText;

  sourceCodeLink = 'https://github.com/paulnagle/NA-Ireland-Ionic-4';
  sourceBugs = 'https://github.com/paulnagle/NA-Ireland-Ionic-4/issues';
  bmltLink = 'https://bmlt.app/';
  fbGroupLink = 'https://www.facebook.com/groups/149214049107349/';
  naMeetingSearchAppIOS = 'https://apps.apple.com/us/app/na-meeting-search/id627643748';
  naMeetingSearchAppANDROID = 'https://play.google.com/store/apps/details?id=org.na.naapp&hl=en';

  constructor(
    private ServiceGroupsProvider: ServiceGroupsProviderService,
    public loadingCtrl: LoadingService,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.translate.get('CONTACT.LOADING').subscribe(value => {
      this.loadingText = value;
    });
    this.loadingCtrl.present(this.loadingText);
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
