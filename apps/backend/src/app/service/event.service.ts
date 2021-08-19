import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class EventService {
  constructor(private http: HttpClient) {}

  getHotels(id): Observable<[]> {
    return this.http.get<[]>("/api/event/" + id);
  }
}
