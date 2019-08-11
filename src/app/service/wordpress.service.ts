import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})

export class WordpressService {

  constructor(
    private http: HTTP
  ) { }

  wordpressApiUrl = 'https://www.na-ireland.org/wp-json/wp/v2/posts?categories=9';

  async getEvents() {
    const data = await this.http.get(this.wordpressApiUrl, {}, {});
    console.log('Returned wp data');
    return JSON.parse(data.data);
  }
}
