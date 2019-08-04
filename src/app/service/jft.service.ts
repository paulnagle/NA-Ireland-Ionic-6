import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})

export class JftService {

  constructor(
    private http: HTTP
  ) { }

  JftUrlEnglish = 'https://www.jftna.org/jft/';

  async getJFT() {
    const data = await this.http.get(this.JftUrlEnglish, {}, {});
    return data.data;
  }
}
