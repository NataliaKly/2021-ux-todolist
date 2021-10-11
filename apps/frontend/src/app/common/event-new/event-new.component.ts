import { Component } from "@angular/core";
import { FormInfoModel } from "../../models/formInfo.model";
import { EventService } from "../../service/event.service";
import { ActivatedRoute } from "@angular/router";
import { EventDto } from "@todolist/models/event.dto";
import moment from "moment";

@Component({
  selector: "b-event-new",
  templateUrl: "./event-new.component.html",
  styleUrls: ["./event-new.component.less"]
})
export class EventNewComponent {
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
  constructor(private route: ActivatedRoute, private eventService: EventService) {}
  ngOnInit() {
    // this.route.params.subscribe(params => {
    //   this.pageId = params.id;
    //   this.eventService.getPageById(this.pageId).subscribe((pageForm: EventDto) => {
    //     this.formInfo.title = pageForm?.title;
    //     this.formInfo.place = pageForm?.place;
    this.date = new Date();
    // const [hours, minutes] = [this.date.getHours(), this.date.getMinutes()];
    // this.formInfo.time = hours + ":" + minutes;
  }
  get dateString(): string {
    const dateString = this.date;
    return dateString.toDateString();
  }
  addNewEvent() {
    const timeEvent = this.formInfo.time.split(":");
    const timeHours = Number.parseInt(timeEvent[0]);
    const timeMinutes = Number.parseInt(timeEvent[1]);
    this.date.setHours(timeHours);
    this.date.setMinutes(timeMinutes);
    const momentDate = moment(this.date);
    const info: EventDto = {
      title: this.formInfo.title,
      place: this.formInfo.place,
      date: momentDate.toISOString(true),
      id: this.pageId,
      description: this.formInfo.description
    };
    const body = {
      event: info
    };
    this.eventService.postNewEvent(body).subscribe((newInfo: EventDto) => {
      newInfo;
    });
  }
}
