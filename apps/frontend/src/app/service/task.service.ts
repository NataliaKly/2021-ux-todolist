import { DealDto } from "@todolist/models/deal.dto";
import { Observable } from "rxjs";
import { EventDto } from "@todolist/models/event.dto";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class TaskService {
  constructor(private http: HttpClient) {}

  postNewTask(body: { tasks: DealDto }): Observable<EventDto> {
    return this.http.post<EventDto>("/api/deals/", body);
  }
}
