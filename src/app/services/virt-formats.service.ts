import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class VirtFormatsService {

  getApiUrlVirtFormats = 'https://bmlt.virtual-na.org/main_server/client_interface/json/?switcher=GetFormats&lang_enum=en';
  constructor() { }

  async getAllVirtFormats() {
    const response: HttpResponse = await CapacitorHttp.get({url: this.getApiUrlVirtFormats});
    return response.data;
  }
}
