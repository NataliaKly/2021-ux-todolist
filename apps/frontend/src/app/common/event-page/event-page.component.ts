import { Component } from "@angular/core";
import { FormInfoModel } from "../../models/formInfo.model";
import { Observable } from "rxjs";
import { EventService } from "../../service/event.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "b-event-page",
  templateUrl: "./event-page.component.html",
  styleUrls: ["./event-page.component.less"]
})
export class EventPageComponent {
  public formInfo: FormInfoModel = {
    name: "",
    time: "",
    data: "",
    place: ""
  };
  public form: string;
  public pageId: string;
  constructor(private route: ActivatedRoute, private eventService: EventService) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pageId = params.id;
      this.eventService.getPageById(this.pageId);
    });
    const formInfo = new Observable(() => {
      this.formInfo.name = "Lunch";
      this.formInfo.time = "18:00";
      this.formInfo.data = "21/08/2021";
      this.formInfo.place = "Lenina.street";
    });
    formInfo.subscribe(formInfo => formInfo);
  }

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
  //       name: this.FormInfoModel.name,
  //       place: this.FormInfoModel.place,
  //       data: this.FormInfoModel.data,
  //       textarea: this.FormInfoModel.textarea
  //     });
  //   }
  //
  //   changesInfo() {
  //     this.FormInfoModel.name = this.formG.get("name").value;
  //     this.FormInfoModel.place = this.formG.get("place").value;
  //     this.FormInfoModel.data = this.formG.get("data").value;
  //     this.FormInfoModel.textarea = this.formG.get("textarea").value;
  //   }
}
