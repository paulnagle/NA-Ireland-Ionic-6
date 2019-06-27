import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeetingListProviderService {

  meetings: any;
  irelandBMLT: any = 'https://bmlt.nasouth.ie/main_server/client_interface/json/';
  tomatoBMLT: any = 'https://tomato.na-bmlt.org/main_server/client_interface/json/';

  constructor(public http: HttpClient) {
    console.log('Hello MeetingListProvider Provider');
  }

  getApiUrlMap: string = this.irelandBMLT + '?switcher=GetSearchResults&sort_keys=longitude,latitude,weekday_tinyint,start_time';
  getApiUrlDay: string = this.irelandBMLT + '?switcher=GetSearchResults&sort_keys=weekday_tinyint,start_time';

  getMeetings() {
    return this.http.get(this.getApiUrlMap);
  }

  getCircleMeetings(lat, long, radius) {
    const getApiUrlCircleMap: string = this.tomatoBMLT
      + '?switcher=GetSearchResults&geo_width_km='
      + radius + '&long_val='
      + long + '&lat_val='
      + lat + '&sort_keys=longitude,latitude&callingApp=na-italia.org';

    return this.http.get(getApiUrlCircleMap);
  }

  getMeetingsSortedByDay() {
    return this.http.get(this.getApiUrlDay);

  }
}
