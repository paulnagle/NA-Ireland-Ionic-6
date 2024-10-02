import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class GeocodeService {

  googleAPIKey = '&key=AIzaSyDg5AKBNjMvoBBlLgXpy-dLxLAcVJYpOq8';
  convertLatLongUrl = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=';
  convertAddressUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=';

  constructor(public http: HttpClient) {
  }

  convertLatLong(lat: any, long: any) {
    const url = this.convertLatLongUrl + lat + ',' + long + this.googleAPIKey;

    return this.http.get(url);
  }

  convertAddress(address: any) {
    const url = this.convertAddressUrl + address + this.googleAPIKey;

    return this.http.get(url);
  }
}
