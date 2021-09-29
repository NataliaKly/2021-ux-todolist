import { Component, Input } from "@angular/core";
import { FormInfoModel } from "../../../models/formInfo.model";

@Component({
  selector: "b-calendar-item",
  templateUrl: "./calendar-item.component.html",
  styleUrls: ["./calendar-item.component.less"]
})
export class CalendarItemComponent {
  @Input() dates!: FormInfoModel;
}
