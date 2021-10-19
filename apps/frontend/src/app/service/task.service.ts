import { DealDto } from "@todolist/models/deal.dto";
import { Observable } from "rxjs";
import { EventDto } from "@todolist/models/event.dto";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class TaskService {
  constructor(private http: HttpClient) {}
  getPageById(pageId: string): Observable<DealDto> {
    return this.http.get<DealDto>("/api/deals/" + pageId);
  }
  deleteTask(pageId: string): Observable<DealDto> {
    return this.http.delete<DealDto>("/api/deals/" + pageId);
  }
  patchSaveInfo(pageId: string, body: { deal: DealDto }): Observable<DealDto> {
    return this.http.patch<DealDto>("/api/deals/" + pageId, body);
  }
  postNewTask(body: { deal: DealDto }): Observable<DealDto> {
    return this.http.post<DealDto>("/api/deals/", body);
  }
}
