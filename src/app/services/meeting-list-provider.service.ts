import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MeetingListProviderService {

  meetings: any;
  irelandBMLT = environment.irelandBMLT;
  tomatoBMLT = environment.tomatoBMLT;
  tomatoIrelandBMLT = environment.tomatoIrelandBMLT;

  constructor(public http: HttpClient) {
    console.log('Hello MeetingListProvider Provider');
  }

  getApiUrlMap: string = this.irelandBMLT + '?switcher=GetSearchResults&sort_keys=longitude,latitude,weekday_tinyint,start_time';
  getApiUrlDay: string = this.irelandBMLT + '?switcher=GetSearchResults&sort_keys=weekday_tinyint,start_time';

  getMeetings() {
    return this.http.get(this.getApiUrlMap);
  }

  getAllMeetings() {
    return this.http.get(this.getApiUrlDay);
  }

  getCircleMeetings(lat: string, long: string, radius: string) {
    const getApiUrlCircleMap: string = this.tomatoBMLT
      + '?switcher=GetSearchResults&geo_width_km=' + radius 
      + '&long_val=' + long 
      + '&lat_val=' + lat 
      + '&sort_keys=longitude,latitude&callingApp=na-ireland-ionic';

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
      + '&sort_keys=longitude,latitude&callingApp=na-ireland-ionic';
    return this.http.get(getAutoRadiusMeetingsURL);
  }

  getRadiusMeetings(lat: string, long: string, radius: string | number) {
    const getRadiusMeetingsURL: string = this.tomatoBMLT
      + '?switcher=GetSearchResults'
      + '&data_field_key=longitude,latitude,id_bigint'
      + '&geo_width_km=' + radius
      + '&long_val=' + long
      + '&lat_val=' + lat
      + '&sort_keys=longitude,latitude&callingApp=na-ireland-ionic';
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
      + '&sort_keys=longitude,latitude&callingApp=na-ireland-ionic';
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
      + '&sort_keys=longitude,latitude&callingApp=na-ireland-ionic';
    return this.http.get(getAddressMeetingsURL);
  }

  getMeetingsByAreaProvider(areaID: string) {
    const getMeetingsByAreaURL: string = this.irelandBMLT
      + '?switcher=GetSearchResults&services='
      + areaID
      + '&sort_keys=weekday_tinyint,start_time&callingApp=na-ireland-ionic';
    return this.http.get(getMeetingsByAreaURL);
  }

  getCounties() {
    const getCountiesURL: string = this.irelandBMLT
      + '?switcher=GetSearchResults&services[]=1&services[]=3&services[]=5&services[]=2&services[]=4&data_field_key=location_sub_province&sort_keys=location_sub_province';
    return this.http.get(getCountiesURL);
  }

  getMeetingsByCountyProvider(countyName: string) {
    const getCountyMeetingsURL: string = this.irelandBMLT
      + '?switcher=GetSearchResults&services[]=1&services[]=3&services[]=5&services[]=2&services[]=4&data_field_key=location_sub_province&sort_keys=location_sub_province';
    return this.http.get(getCountyMeetingsURL);
  }

  getSingleMeetingByID(id: string) {
    const getSingleMeetingByIDURL: string = this.tomatoBMLT
      + '?switcher=GetSearchResults&meeting_ids[]='
      + id;
    return this.http.get(getSingleMeetingByIDURL);
  }

    getIrishTomatoMeetings() {
      return this.http.get(this.tomatoIrelandBMLT);
    }
}
