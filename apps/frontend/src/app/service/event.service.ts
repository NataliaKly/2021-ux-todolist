import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { FormInfoModel } from "../models/formInfo.model";
import { EventDto } from "@todolist/models/event.dto";

@Injectable()
export class EventService {
  constructor(private http: HttpClient) {}

  getPageById(pageId: string): Observable<EventDto> {
    return this.http.get<EventDto>("/api/events/" + pageId);
  }
  patchSaveInfo(pageId: string, body: { event: EventDto }): Observable<EventDto> {
    return this.http.patch<EventDto>("/api/events/" + pageId, body);
  }
  // getDateString(pageId: string, date): Observable<string> {
  //   return this.http.get<string>("api/events" + date);
  // }
}
