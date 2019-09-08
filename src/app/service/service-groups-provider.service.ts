import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ServiceGroupsProviderService {

  constructor(public http: HttpClient) {
  }

  getApiUrlServiceGroups = environment.getApiUrlServiceGroups;

  getAllServiceGroups() {
    return this.http.get(this.getApiUrlServiceGroups);
  }
}
