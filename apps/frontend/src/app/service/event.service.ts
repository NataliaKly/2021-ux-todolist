import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class EventService {
  constructor(private http: HttpClient) {}

  getPageById(id: string): Observable<string> {
    return this.http.get<string>("/api/event/" + id);
  }
}
