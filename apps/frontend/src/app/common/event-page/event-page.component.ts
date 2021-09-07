import { Component } from "@angular/core";
import { FormInfoModel } from "../../models/formInfo.model";
import { EventService } from "../../service/event.service";
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup } from "@angular/forms";
import { EventDto } from "@todolist/models/event.dto";

@Component({
  selector: "b-event-page",
  templateUrl: "./event-page.component.html",
  styleUrls: ["./event-page.component.less"]
})
export class EventPageComponent {
  public formInfo: FormInfoModel = {
    title: "",
    time: "",
    date: "",
    place: ""
  };
  public formG: FormGroup;
  public pageId: string;
  public pageForm: EventDto;
  constructor(private route: ActivatedRoute, private eventService: EventService) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pageId = params.id;
      this.eventService.getPageById(this.pageId).subscribe((pageForm: EventDto) => {
        console.log(pageForm);
        this.formInfo.title = this.pageForm.title;
        this.formInfo.place = this.pageForm.place;
        // this.formInfo.time = this.pageForm.date.time;
        // this.formInfo.date = this.pageForm.date.date;
      });
    });
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
