import { Injectable } from '@angular/core';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class VirtFormatsProvider {

  getApiUrlVirtFormats = 'https://bmlt.virtual-na.org/main_server/client_interface/json/?switcher=GetFormats';
  constructor(private httpCors: HTTP) { }

  async getAllVirtFormats() {
    const data = await this.httpCors.get(this.getApiUrlVirtFormats, {}, {});
    return JSON.parse(data.data);
  }
}
