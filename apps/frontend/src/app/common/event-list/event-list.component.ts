import { Component, Input } from "@angular/core";
import { FormInfoModel } from "../../models/formInfo.model";
import { EventDto } from "@todolist/models/event.dto";
import { ActivatedRoute } from "@angular/router";
import { EventService } from "../../service/event.service";
import moment from "moment";

@Component({
  selector: "b-event-list",
  templateUrl: "./event-list.component.html",
  styleUrls: ["./event-list.component.less"]
})
export class EventListComponent {
  @Input()
  title = "Title";
  // public eventInfo: FormInfoModel = {
  //   title: "",
  //   time: "",
  //   date: "",
  //   place: "",
  //   description: ""
  // };
  public info: string;
  public pageId: string;
  public infoView: EventDto;
  public date;
  isTrue = false;

  events: EventDto[] = [];

  constructor(private route: ActivatedRoute, private eventService: EventService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pageId = params.id;
      this.eventService.getEventsList().subscribe((events: EventDto[]) => {
        this.events = events;
        // this.eventInfo.title = infoView?.title;
        // this.eventInfo.place = infoView?.place;
        // this.date = new Date(infoView?.date);
        // const [hours, minutes] = [this.date.getHours(), this.date.getMinutes()];
        // this.eventInfo.time = hours + ":" + minutes;
      });
    });
    const momentTime = moment(this.date);
    const currentTime = momentTime.get("h");
    for (let i = 1; i < currentTime; i++) {
      this.isTrue = true;
    }
  }

  get dateString(): string {
    const momentDate = moment(this.date);
    return momentDate.format("DD.MM.YYYY");
  }

  timeString(date: string): string {
    const momentDate = moment(this.date);
    //todo
    return momentDate.format("DD.MM.YYYY");
  }
}
