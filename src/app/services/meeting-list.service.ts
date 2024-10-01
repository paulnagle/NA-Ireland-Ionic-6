import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { environment } from 'src/environments/environment.prod';
@Injectable()
export class MeetingListService {

  getApiUrlVirt = 'https://bmlt.virtual-na.org/main_server/client_interface/json/?switcher=GetSearchResults&sort_keys=weekday_tinyint,start_time&services=5/';
  getAllVirtMtgs = 'https://bmlt.virtual-na.org/main_server/client_interface/json/?switcher=GetSearchResults&data_field_key=location_postal_code_1,duration_time,start_time,time_zone,weekday_tinyint,service_body_bigint,longitude,latitude,location_province,location_municipality,location_street,location_info,location_text,location_neighborhood,formats,format_shared_id_list,comments,meeting_name,location_sub_province,worldid_mixed,root_server_uri,id_bigint,meeting_name,location_text,formatted_address,formatted_location_info,formatted_comments,contact_name_1,contact_phone_1,contact_email_1,contact_name_2,contact_phone_2,contact_email_2,virtual_meeting_link&services[]=4&recursive=1&sort_keys=start_time&services=5/';

  getAllMtgsUrl = 'https://bmlt.nasouth.ie/main_server/client_interface/json/?switcher=GetSearchResults&sort_keys=location_sub_province,weekday_tinyint,start_time';

  irelandBMLT = environment.irelandBMLT;
  tomatoBMLT = environment.tomatoBMLT;

  constructor() {}


  async getVirtualMeetings() {
    const response: HttpResponse = await CapacitorHttp.get({url: this.getApiUrlVirt});
    return response.data;
  }

  async getAllVirtualMeetings() {
    const response: HttpResponse = await CapacitorHttp.get({url: this.getAllVirtMtgs});
    return response.data;
  }

  async getAllMeetings() {
    const response: HttpResponse = await CapacitorHttp.get({url: this.getAllMtgsUrl});
    return response.data;
  }

  async getAllCounties() {
    const getAllCountiesURL: any = "https://bmlt.nasouth.ie/main_server/client_interface/json/?switcher=GetSearchResults&data_field_key=location_sub_province&sort_keys=location_sub_province,weekday_tinyint,start_time";

    const response: HttpResponse = await CapacitorHttp.get({url: getAllCountiesURL});
    return response;
  }

  async getMeetingsByCounty(countyName: any) {
    if (countyName == ""){
      const getAllCountiesURL: any = "https://bmlt.nasouth.ie/main_server/client_interface/json/"
        + "?switcher=GetSearchResults&meeting_key=venue_type" 
        + "&meeting_key_value=2"
        + "&sort_keys=weekday_tinyint,start_time"

      const response: HttpResponse = await CapacitorHttp.get({url: getAllCountiesURL});
      return response;
    } else {
      const getMeetingsByCountyURL: any = "https://bmlt.nasouth.ie/main_server/client_interface/json/"
        + '?switcher=GetSearchResults&meeting_key=location_sub_province'
        + '&meeting_key_value='
        + countyName
        + '&sort_keys=weekday_tinyint,start_time';

      const response: HttpResponse = await CapacitorHttp.get({url: getMeetingsByCountyURL});
      return response;
    }
  }

  async getAutoRadiusMeetings(lat: any, long: any, radius: any) {
    const getAutoRadiusMeetingsURL: any = this.tomatoBMLT
      + '?switcher=GetSearchResults&geo_width_km='
      + '-'
      + radius
      + '&long_val='
      + long
      + '&lat_val='
      + lat
      + '&sort_keys=longitude,latitude&callingApp=bmlt_search_3_ionic';

    const response = await CapacitorHttp.get({url: getAutoRadiusMeetingsURL});
    return response;
  }

  async getRadiusMeetings(lat: any, long: any, radius: any) {
    const getRadiusMeetingsURL: any = this.tomatoBMLT
      + '?switcher=GetSearchResults'
      + '&data_field_key=longitude,latitude,id_bigint'
      + '&geo_width_km='
      + radius
      + '&long_val='
      + long
      + '&lat_val='
      + lat
      + '&sort_keys=longitude,latitude&callingApp=bmlt_search_3_ionic';
 
    const response = await CapacitorHttp.get({url: getRadiusMeetingsURL});
    return response;
  }

  async getAddressMeetings(lat: any, long: any, radius: any) {
    const getAddressMeetingsURL: any = this.tomatoBMLT
      + '?switcher=GetSearchResults&geo_width_km='
      + '-'
      + radius
      + '&long_val='
      + long
      + '&lat_val='
      + lat
      + '&sort_keys=longitude,latitude&callingApp=bmlt_search_3_ionic';
      
    const response: HttpResponse = await CapacitorHttp.get({url: getAddressMeetingsURL});
    return response;
  }

  async getNearestMeeting(lat: any, long: any) {
    const getAddressMeetingsURL: any = this.tomatoBMLT
      + '?switcher=GetSearchResults&geo_width_km='
      + '-1'
      + '&long_val='
      + long
      + '&lat_val='
      + lat
      + '&sort_keys=longitude,latitude&callingApp=bmlt_search_3_ionic';

    const response: HttpResponse = await CapacitorHttp.get({url: getAddressMeetingsURL});
    return response;
  }

  async getMeetingsByArea(areaID: any) {
    const getMeetingsByAreaURL: any = this.tomatoBMLT
      + '?switcher=GetSearchResults&services='
      + areaID
      + '&sort_keys=weekday_tinyint,start_time&callingApp=bmlt_search_3_ionic';

    const response: HttpResponse = await CapacitorHttp.get({url: getMeetingsByAreaURL});
    return response;
  }


  async getMeetingsByIDs(ids_string: any) {
    const getSingleMeetingByIDURL: any = this.tomatoBMLT
      + '?switcher=GetSearchResults&meeting_ids[]='
      + ids_string;

    const response: HttpResponse = await CapacitorHttp.get({url: getSingleMeetingByIDURL});
    return response;
  }

}
