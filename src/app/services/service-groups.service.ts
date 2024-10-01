import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';


@Injectable()
export class ServiceGroupsService {

  getApiUrlServiceGroups = 'https://nasouth.ie/bmlt/main_server/client_interface/json/?switcher=GetServiceBodies&callingApp=na_ireland';
  getApiUrlVirtServiceGroups = 'https://nasouth.ie/main_server/client_interface/json/?switcher=GetServiceBodies&callingApp=na_ireland&services=5/';

  constructor() {}

  async getAllServiceGroups() {
    const data: HttpResponse = await CapacitorHttp.get({url: this.getApiUrlServiceGroups});
    return data;
  }

  async getAllVirtServiceGroups() {
    const response: HttpResponse = await CapacitorHttp.get({url: this.getApiUrlVirtServiceGroups});
    return response.data;
  }

}
