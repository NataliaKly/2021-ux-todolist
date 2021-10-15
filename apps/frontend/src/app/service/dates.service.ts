import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { FormInfoModel } from "../models/formInfo.model";

@Injectable()
export class DatesService {
  constructor(private http: HttpClient) {}
}
