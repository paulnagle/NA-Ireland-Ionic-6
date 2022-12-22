import { Component, OnInit } from '@angular/core';
import { ServiceGroupsProviderService } from '../../services/service-groups-provider.service';
import { LoadingService } from '../../services/loading.service';
import { TranslateService } from '@ngx-translate/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {


  loader = null;
  serviceGroupNames: any;
  loadingText;

  sourceCodeLink = 'https://github.com/paulnagle/NA-Ireland-Ionic-6';
  sourceBugs = 'https://github.com/paulnagle/NA-Ireland-Ionic-6/issues';
  bmltLink = 'https://bmlt.app/';
  fbGroupLink = 'https://www.facebook.com/groups/149214049107349/';
  naMeetingSearchAppIOS = 'https://apps.apple.com/us/app/na-meeting-search/id627643748';
  naMeetingSearchAppANDROID = 'https://play.google.com/store/apps/details?id=org.na.naapp&hl=en';

  constructor(
    private ServiceGroupsProvider: ServiceGroupsProviderService,
    private iab: InAppBrowser,
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
    let browser = this.iab.create(url, '_system');
  }

}
