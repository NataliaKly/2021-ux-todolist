import { Component, Input, Output } from "@angular/core";

@Component({
  selector: "b-popup",
  templateUrl: "./popup.component.html",
  styleUrls: ["./popup.component.less"]
})
export class PopupComponent {
  @Input() popupVisible = true;
}
