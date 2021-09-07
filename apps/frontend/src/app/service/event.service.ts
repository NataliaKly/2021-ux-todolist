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
}
