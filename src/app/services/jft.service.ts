import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';


@Injectable({
  providedIn: 'root'
})

export class JftService {

  constructor(
  ) { }

  JftUrlEnglish = 'https://www.jftna.org/jft/';

  async getEnglishJFT() {
    const response: HttpResponse = await CapacitorHttp.get({url: this.JftUrlEnglish});
    return response.data;
  }
}