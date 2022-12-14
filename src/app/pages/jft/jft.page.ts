import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../services/loading.service';
import { JftService } from '../../services/jft.service';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-jft',
  templateUrl: './jft.page.html',
  styleUrls: ['./jft.page.scss'],
})
export class JftPage implements OnInit {

  jft;
  englishjft;
  loader = null;
  headers = null;
  loadingText;

  constructor(
    public loadingCtrl: LoadingService,
    public JftProvider: JftService,
    private translate: TranslateService,
    private storage: StorageService
  ) { }

  ngOnInit() {
    this.jft = this.getJFT();
  }
  
  getJFT() {
    this.JftProvider.getEnglishJFT().then((data) => {
      this.jft = data;
      // this.loadingCtrl.dismiss();
    });
  }

}
