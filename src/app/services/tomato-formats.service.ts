import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class TomatoFormatsService {

  tomatoBMLT = 'https://na-italia.info/main_server/client_interface/json/?switcher=GetFormats&show_all=1&format_ids=';

  constructor() {}

  async getFormatNamesByID(uniqueIDs: Set<string>, language: string) {
    const formatNamesByID: any = {};
    const formatsApi = this.tomatoBMLT + Array.from(uniqueIDs).join(",");
    const response: HttpResponse = await CapacitorHttp.get({url: formatsApi+ '&lang_enum=en' });

    for (const format of response.data) {
      formatNamesByID[format.id] = format.name_string;
    }

    if (language !== 'en') {
      const response = await CapacitorHttp.get({url: formatsApi + '&lang_enum=' + language});
      for (const format of response.data) {
        formatNamesByID[format.id] = format.name_string;
      }
    }

    return formatNamesByID;
  }

  setExplodedFormatsOnMeetingList(meetingList: any, formatLanguage: string) {
    const uniqueFormatIDs = new Set<string>();
    for (const meeting of meetingList) {
      for (const formatID of meeting?.format_shared_id_list.split(",") || []) {
        uniqueFormatIDs.add(formatID);
      }
    }

    this.getFormatNamesByID(uniqueFormatIDs, formatLanguage).then((formatNamesByID) => {
      for (const meeting of meetingList) {
        let formats = '';
        for (const formatID of meeting?.format_shared_id_list?.split(",") || []) {
          const name = formatNamesByID[formatID];
          if (name) {
            formats = `${formats}${name}. `
          }
        }
        meeting.formats_exploded = formats.trim();
      }
    });
  }
}
