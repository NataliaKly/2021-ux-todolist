import { Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { FormInfoModel } from "../../../models/formInfo.model";
import { PanelComponent } from "../../panel/panel.component";

@Component({
  selector: "b-calendar-item",
  templateUrl: "./calendar-item.component.html",
  styleUrls: ["./calendar-item.component.less"]
})
export class CalendarItemComponent {
  @Input() date!: FormInfoModel;
  @Input() popupVisible = true;
  openPanel(): void {
    this.popupVisible = true;
  }
}
