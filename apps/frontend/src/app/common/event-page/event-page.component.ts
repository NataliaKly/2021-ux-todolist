import { Component, Input } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { EventService } from "../../../../../backend/src/app/service/event.service";

@Component({
  selector: "b-event-page",
  templateUrl: "./event-page.component.html",
  styleUrls: ["./event-page.component.less"]
})
export class EventPageComponent {
  save: string;
  cancel: string;
  title: string;
  @Input()
  input: string;
  public formG: FormGroup;
  public pageForm;
  public formId: string;
  inputControl: FormControl = new FormControl();

  constructor(private service: EventService, private route: ActivatedRoute) {}
  ngOnInit() {

  }
}
