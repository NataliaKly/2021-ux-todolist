import { Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { FormInfoModel } from "../../../models/formInfo.model";
import { PopupComponent } from "../../popup/popup.component";

@Component({
  selector: "b-calendar-item",
  templateUrl: "./calendar-item.component.html",
  styleUrls: ["./calendar-item.component.less"]
})
export class CalendarItemComponent {
  @Input() date!: FormInfoModel;
  // @ViewChild(PopupComponent) popup: PopupComponent;
  @Output() popupVisible: EventEmitter<void> = new EventEmitter<void>();
  public openPopup(): void {
    this.popupVisible.emit();
  }
}
