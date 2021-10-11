import { Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { FormInfoModel } from "../../../models/formInfo.model";
import { PanelComponent } from "../../panel/panel.component";
import { DayInfoModel } from "../../../models/day-info.model";

@Component({
  selector: "b-calendar-item",
  templateUrl: "./calendar-item.component.html",
  styleUrls: ["./calendar-item.component.less"]
})
export class CalendarItemComponent {
  @Input() date!: number;
  @Input() eventsNumber!: number | undefined;
  @Input() eventsTasks!: number | undefined;
}
