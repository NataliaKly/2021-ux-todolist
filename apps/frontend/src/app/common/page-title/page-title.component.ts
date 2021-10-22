import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { EventService } from "../../service/event.service";

@Component({
  selector: "b-page-title",
  templateUrl: "./page-title.component.html",
  styleUrls: ["./page-title.component.less"]
})
export class PageTitleComponent {
  @Input()
  title = "Title";
  public pageId: string;

  constructor(private route: ActivatedRoute, private eventService: EventService, private router: Router) {}

  openCalendar() {
    this.router.navigate(["/home-page"]);
  }
}
