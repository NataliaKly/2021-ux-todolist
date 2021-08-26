import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class EventService {
  constructor(private http: HttpClient) {}

  getValue(id): Observable<formInfo> {
    return this.http.get<formInfo>("/api/event/" + id);
  }
}
