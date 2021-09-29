import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { FormInfoModel } from "../models/formInfo.model";

@Injectable()
export class DatesService {
  constructor(private http: HttpClient) {}
  getDates(): Observable<number[]> {
    return this.http.get<number[]>("/api/calendar");
  }

  getDatesById(id: string): Observable<number> {
    return this.http.get<number>("/api/FormInfoModel/" + id); // тут возвращаем продукт по ид
  }
}
