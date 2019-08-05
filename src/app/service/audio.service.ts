import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor(public http: HTTP) {
  }

  getApiUrl = 'https://android.nasouth.ie/conventions.json';

  async getConventions() {
    console.log('getConventions');
    const data = await this.http.get(this.getApiUrl, {}, {});

    return JSON.parse(data.data);
  }
}
