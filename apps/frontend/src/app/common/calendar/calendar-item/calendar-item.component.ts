import { Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import moment from "moment";

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
