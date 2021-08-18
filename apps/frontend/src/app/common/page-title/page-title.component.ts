import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "b-page-title",
  templateUrl: "./page-title.component.html",
  styleUrls: ["./page-title.component.less"],
})
export class PageTitleComponent {
  @Input()
  title: string = "Title";

  inputControl: FormControl = new FormControl(this.title);
}
