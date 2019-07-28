import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../service/loading.service';
import { HTTP } from '@ionic-native/http/ngx';

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
    private http: HTTP) { }

  ngOnInit() {
    console.log('jft.page ngOnInit()');
    this.loadingCtrl.present('Loading JFT...');
    this.getJFT();
  }

  getJFT() {

    this.http.get('https://www.jftna.org/jft/', {}, {})
      .then(data => {
        this.jft = data.data;
        this.loadingCtrl.dismiss();
      }, error => {
        console.log(error);
      })
      .catch(error => {

        console.log(error.status);
        console.log(error.error);
        console.log(error.headers);
        this.loadingCtrl.dismiss();
      });
  }

}
