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
  public form: EventDto;
  public pageId: string;
  public pageForm: EventDto;
  constructor(private route: ActivatedRoute, private eventService: EventService) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pageId = params.id;
      this.eventService.getPageById(this.pageId).subscribe((pageForm: EventDto) => {
        console.log(pageForm);
        this.pageForm = pageForm;
        this.formInfo.title = this.pageForm?.title;
        this.formInfo.place = this.pageForm?.place;
        const date = new Date(this.pageForm?.date);
        const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
        const formattedDate = day + "-" + month + "-" + year;
        const [hours, minutes] = [date.getHours(), date.getMinutes()];
        const formattedTime = hours + ":" + minutes;
        this.formInfo.date = formattedDate;
        this.formInfo.time = formattedTime;
        // const time: new Date() =  { formattedDate, hours: time.setHours(hours), minutes: time.setMinutes(minutes) };
        // console.log(time);
        // time.toISOString();
        // this.form = {
        //   title: this.formInfo.title,
        //   // date: timeFormattedDate,
        //   place: this.formInfo.place
        // };
      });
    });
  }
  // changeFormInfo() {
  //   this.pageForm.title = this.form.get().value;
  // }

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
