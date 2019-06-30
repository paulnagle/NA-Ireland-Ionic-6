import { Component, OnInit } from '@angular/core';
import { JftService } from '../service/jft.service';
import { LoadingService } from '../service/loading.service';

@Component({
  selector: 'app-jft',
  templateUrl: './jft.page.html',
  styleUrls: ['./jft.page.scss'],
})
export class JftPage implements OnInit {

  jft: string;
  loader = null;

  constructor(
    private thisJftService: JftService,
    public loadingCtrl: LoadingService) {
    this.loadingCtrl.present('Loading JFT...');
    this.getJFT();
  }

  getJFT() {
    this.thisJftService
      .getJFT()
      .subscribe((data) => {
        this.jft = data;
        this.loadingCtrl.dismiss();
      });
  }

  ngOnInit() {
  }

}
