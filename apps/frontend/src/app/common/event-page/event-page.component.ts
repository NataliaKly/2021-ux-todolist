import { Component } from "@angular/core";
import { FormInfoModel } from "../../models/formInfo.model";
import { EventService } from "../../service/event.service";
import { ActivatedRoute } from "@angular/router";
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
    place: "",
    description: ""
  };
  public pageId: string;
  public date: Date;
  constructor(private route: ActivatedRoute, private eventService: EventService) {}
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
}
