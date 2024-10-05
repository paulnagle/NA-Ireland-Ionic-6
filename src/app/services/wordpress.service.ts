import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  constructor() { }

  wordpressApiUrl = environment.wordpressApiUrl;

  async getEvents() {
    const response: HttpResponse = await CapacitorHttp.get({url: this.wordpressApiUrl});
    return response.data;
  }
}
