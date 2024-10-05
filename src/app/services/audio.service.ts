import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor() {
  }


  async getConventions() {

    const speakersApiUrl = environment.speakersApiUrl;
    const response: HttpResponse = await CapacitorHttp.get({url: speakersApiUrl});
    return response.data;
  }

}
