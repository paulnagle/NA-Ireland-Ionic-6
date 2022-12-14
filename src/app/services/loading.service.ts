import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  isLoading = false;

  constructor(public loadingController: LoadingController) { }

  async present(text: string) {
    console.log('loader.present() called');
    this.isLoading = true;
    return await this.loadingController.create({
      spinner: 'circles',
      message: text
    }).then(a => {
      a.present().then(() => {
        console.log('loader.present() presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async dismiss() {
    console.log('loader.dismiss() called');
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }
}
