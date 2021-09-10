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
  public form: EventDto;
  public pageId: string;
  public pageForm: EventDto;
  public date: Date;
  constructor(private route: ActivatedRoute, private eventService: EventService) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pageId = params.id;
      this.eventService.getPageById(this.pageId).subscribe((pageForm: EventDto) => {
        this.pageForm = pageForm;
        this.formInfo.title = this.pageForm?.title;
        this.formInfo.place = this.pageForm?.place;
        this.date = new Date(this.pageForm?.date);
        const [hours, minutes] = [this.date.getHours(), this.date.getMinutes()];
        const formattedTime: string = hours + ":" + minutes;
        this.formInfo.time = formattedTime;
        const info: EventDto = {
          title: this.formInfo.title,
          place: this.formInfo.place,
          date: this.formInfo.date,
          id: this.pageId,
          description: this.formInfo.description
        };
        const time = this.formInfo.time.split(":");
        const timeHours = Number.parseInt(time[0]);
        const timeMinutes = Number.parseInt(time[1]);
        this.date.setHours(timeHours);
        this.date.setMinutes(timeMinutes);
        this.pageForm.date = this.date.toISOString();
        this.pageForm = info;
      });
    });
  }

  saveInfo() {
    this.eventService.patchSaveInfo(this.pageId, this.pageForm).subscribe((info: EventDto) => {
      this.pageForm = info;
    });
  }
}
