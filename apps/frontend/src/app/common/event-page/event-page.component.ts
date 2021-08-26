import { Component, Input } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { EventService } from "../../../../../backend/src/app/service/event.service";
import { FormInfo } from "../../models/formInfo";

@Component({
  selector: "b-event-page",
  templateUrl: "./event-page.component.html",
  styleUrls: ["./event-page.component.less"]
})
export class EventPageComponent {
  //   save: string;
  //   cancel: string;
  //   title: string;
  //   public FormInfo: FormInfo;
  //   @Input()
  //   input: string;
  //   public formG: FormGroup;
  //   inputControl: FormControl = new FormControl();
  //   id: string;
  //
  //   constructor(private service: EventService, private route: ActivatedRoute, private fb: FormBuilder) {
  //     this.formG = fb.group({
  //       name: "",
  //       place: "",
  //       data: "",
  //       textarea: ""
  //     });
  //   }
  //   ngOnInit(): void {
  //     this.fb.group(FormGroup);
  //     this.formG.valueChanges.subscribe(value => {
  //       value;
  //     });
  //     this.route.params.subscribe(param => {
  //       const id = param.id || "";
  //       this.service.getValue(id);
  //     });
  //     this.formG.patchValue({
  //       name: this.FormInfo.name,
  //       place: this.FormInfo.place,
  //       data: this.FormInfo.data,
  //       textarea: this.FormInfo.textarea
  //     });
  //   }
  //
  //   changesInfo() {
  //     this.FormInfo.name = this.formG.get("name").value;
  //     this.FormInfo.place = this.formG.get("place").value;
  //     this.FormInfo.data = this.formG.get("data").value;
  //     this.FormInfo.textarea = this.formG.get("textarea").value;
  //   }
}
