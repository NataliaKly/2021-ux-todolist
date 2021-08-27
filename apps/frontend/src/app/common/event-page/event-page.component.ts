import { Component } from "@angular/core";
import { FormInfoModel } from "../../models/formInfo.model";

@Component({
  selector: "b-event-page",
  templateUrl: "./event-page.component.html",
  styleUrls: ["./event-page.component.less"]
})
export class EventPageComponent {
  //   save: string;
  //   cancel: string;
  //   title: string;
  public formInfo: FormInfoModel;
  ngOnInit() {
    this.formInfo.name = "Lunch";
    this.formInfo.time = "18:00";
    this.formInfo.data = "21/08/2021";
    this.formInfo.place = "Lenina.street";
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
