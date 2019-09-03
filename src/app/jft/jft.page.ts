import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../service/loading.service';
import { JftService } from '../service/jft.service';

@Component({
  selector: 'app-jft',
  templateUrl: './jft.page.html',
  styleUrls: ['./jft.page.scss']
})
export class JftPage implements OnInit {

  jft;
  loader = null;
  headers = null;

  constructor(
    public loadingCtrl: LoadingService,
    public JftProvider: JftService) { }

  ngOnInit() {
    this.loadingCtrl.present('Loading JFT...');
    this.getJFT();
  }

  getJFT() {
    this.JftProvider.getJFT().then((data) => {
      this.jft = data;
      this.loadingCtrl.dismiss();
    });

  }

}
