import { Component } from "@angular/core";
import { FormInfoModel } from "../../models/formInfo.model";
import { ActivatedRoute, Router } from "@angular/router";
import { EventService } from "../../service/event.service";
import { EventDto } from "@todolist/models/event.dto";
import moment from "moment";

@Component({
  selector: "b-event-edit",
  templateUrl: "./event-edit.component.html",
  styleUrls: ["./event-edit.component.less"]
})
export class EventEditComponent {
  public formInfo: FormInfoModel = {
    title: "",
    time: "",
    date: "",
    place: "",
    description: ""
  };
  public pageId: string;
  public date: Date;
  public datePage;

  constructor(private route: ActivatedRoute, private eventService: EventService, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pageId = params.id;
      this.eventService.getPageById(this.pageId).subscribe((pageForm: EventDto) => {
        this.formInfo.title = pageForm?.title;
        this.formInfo.place = pageForm?.place;
        this.date = new Date(pageForm?.date);
        const [hours, minutes] = [this.date.getHours(), this.date.getMinutes()];
        this.formInfo.time = hours + ":" + minutes;
      });
    });
  }

  get dateString(): string {
    const momentDate = moment(this.date);
    return momentDate.format("DD.MM.YYYY");
  }

  saveInfo() {
    const time = this.formInfo.time.split(":");
    const timeHours = Number.parseInt(time[0]);
    const timeMinutes = Number.parseInt(time[1]);
    this.date.setHours(timeHours);
    this.date.setMinutes(timeMinutes);
    const info: EventDto = {
      title: this.formInfo.title,
      place: this.formInfo.place,
      date: this.date.toISOString(),
      id: this.pageId,
      description: this.formInfo.description
    };
    const body = {
      event: info
    };
    this.eventService.patchSaveInfo(this.pageId, body).subscribe((newInfo: EventDto) => {
      newInfo;
    });
  }
  CancelInfo(pageId) {
    this.router.navigate(["/event-view/" + pageId]);
  }
}
