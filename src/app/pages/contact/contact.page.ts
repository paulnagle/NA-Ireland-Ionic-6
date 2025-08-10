import { Component, OnInit } from '@angular/core';
import { ServiceGroupsService } from '../../services/service-groups.service';
import { LoadingService } from '../../services/loading.service';
import { TranslateService } from '@ngx-translate/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  standalone: false
})
export class ContactPage implements OnInit {


  loader = null;
  serviceGroupNames: any;
  loadingText!: any;

  sourceCodeLink = 'https://github.com/paulnagle/NA-Ireland-Ionic-6';
  sourceBugs = 'https://github.com/paulnagle/NA-Ireland-Ionic-6/issues';
  bmltLink = 'https://bmlt.app/';
  fbGroupLink = 'https://www.facebook.com/groups/149214049107349/';
  naMeetingSearchAppIOS = 'https://apps.apple.com/us/app/na-meeting-search/id627643748';
  naMeetingSearchAppANDROID = 'https://play.google.com/store/apps/details?id=org.na.naapp&hl=en';

  constructor(
    private ServiceGroupsProvider: ServiceGroupsService,
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
    this.ServiceGroupsProvider.getAllServiceGroups().then((data) => {

      this.serviceGroupNames = data.data;
      this.loadingCtrl.dismiss();
    });

  }

  public openLink(url: any) {
    const browser = Browser.open({url: url});
  }

}

