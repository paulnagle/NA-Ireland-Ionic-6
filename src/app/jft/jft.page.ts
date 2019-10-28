import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../service/loading.service';
import { JftService } from '../service/jft.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-jft',
  templateUrl: './jft.page.html',
  styleUrls: ['./jft.page.scss']
})
export class JftPage implements OnInit {

  jft;
  loader = null;
  headers = null;
  loadingText;

  constructor(
    public loadingCtrl: LoadingService,
    public JftProvider: JftService,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.translate.get('CONTACT.LOADING').subscribe(value => {
      this.loadingText = value;
    });
    this.loadingCtrl.present(this.loadingText);
    this.getJFT();
  }

  getJFT() {
    this.JftProvider.getJFT().then((data) => {
      this.jft = data;
      this.loadingCtrl.dismiss();
    });

  }

}
