import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor(public http: HTTP) {
  }

  async getConventions() {
    const speakersApiUrl = environment.speakersApiUrl;
    const data = await this.http.get(speakersApiUrl, {}, {});

    return JSON.parse(data.data);
  }
}
