import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JftService {

  constructor(public http: HttpClient) {
    console.log('Hello JftProvider Provider');
  }

  getJFTUrl: any = 'http://jftna.org/jft/';

  getJFT() {
    return this.http.get(this.getJFTUrl, { responseType: 'text' });
  }

}
