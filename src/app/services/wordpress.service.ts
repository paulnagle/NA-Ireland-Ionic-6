import { Injectable } from '@angular/core';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  constructor(
    private http: HTTP
  ) { }

  wordpressApiUrl = environment.wordpressApiUrl;

  async getEvents() {
    const data = await this.http.get(this.wordpressApiUrl, {}, {});
    return JSON.parse(data.data);
  }
}
