import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceGroupsProviderService {

  constructor(public http: HttpClient) {
    console.log('Hello ServiceGroupsProvider Provider');
  }


  getApiUrlServiceGroups: any = 'https://bmlt.nasouth.ie/main_server/client_interface/json/?switcher=GetServiceBodies';

  getAllServiceGroups() {
    return this.http.get(this.getApiUrlServiceGroups);
  }
}
