import { Component } from "@angular/core";
import { FormInfoModel } from "../../models/formInfo.model";
import { EventService } from "../../service/event.service";
import { ActivatedRoute } from "@angular/router";
import { EventDto } from "@todolist/models/event.dto";
import { isDateString } from "class-validator";
import { formatDate } from "@angular/common";

@Component({
  selector: "b-page-list",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.less"]
})
export class CalendarComponent {
  // ngOnInit() {}
}
