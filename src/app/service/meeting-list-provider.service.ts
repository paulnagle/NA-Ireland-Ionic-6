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

  getCircleMeetings(lat: string, long: string, radius: string) {
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

  getAutoRadiusMeetings(lat: string, long: string, radius: string) {
    const getAutoRadiusMeetingsURL: string = this.tomatoBMLT
      + '?switcher=GetSearchResults&geo_width_km='
      + '-'
      + radius
      + '&long_val='
      + long
      + '&lat_val='
      + lat
      + '&sort_keys=longitude,latitude&callingApp=ionic-bmltapp';
    return this.http.get(getAutoRadiusMeetingsURL);
  }

  getRadiusMeetings(lat: string, long: string, radius: string | number) {
    const getRadiusMeetingsURL: string = this.tomatoBMLT
      + '?switcher=GetSearchResults'
      + '&data_field_key=longitude,latitude,id_bigint'
      + '&geo_width_km='
      + radius
      + '&long_val='
      + long
      + '&lat_val='
      + lat
      + '&sort_keys=longitude,latitude&callingApp=ionic-bmltapp';
    return this.http.get(getRadiusMeetingsURL);
  }

  getAddressMeetings(lat: string, long: string, radius: string) {
    const getAddressMeetingsURL: string = this.tomatoBMLT
      + '?switcher=GetSearchResults&geo_width_km='
      + '-'
      + radius
      + '&long_val='
      + long
      + '&lat_val='
      + lat
      + '&sort_keys=longitude,latitude&callingApp=ionic-bmltapp';
    return this.http.get(getAddressMeetingsURL);
  }

  getNearestMeeting(lat: string, long: string) {
    const getAddressMeetingsURL: string = this.tomatoBMLT
      + '?switcher=GetSearchResults&geo_width_km='
      + '-1'
      + '&long_val='
      + long
      + '&lat_val='
      + lat
      + '&sort_keys=longitude,latitude&callingApp=ionic-bmltapp';
    return this.http.get(getAddressMeetingsURL);
  }

  getMeetingsByAreaProvider(areaID: string) {
    const getMeetingsByAreaURL: string = this.tomatoBMLT
      + '?switcher=GetSearchResults&services='
      + areaID
      + '&sort_keys=weekday_tinyint,start_time&callingApp=ionic-bmltapp';
    return this.http.get(getMeetingsByAreaURL);
  }

  getSingleMeetingByID(id: string) {
    const getSingleMeetingByIDURL: string = this.tomatoBMLT
      + '?switcher=GetSearchResults&meeting_ids[]='
      + id;
    return this.http.get(getSingleMeetingByIDURL);
  }

}
