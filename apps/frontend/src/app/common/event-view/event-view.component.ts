import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { EventDto } from "@todolist/models/event.dto";
import { ActivatedRoute } from "@angular/router";
import { EventService } from "../../service/event.service";
import { FormInfoModel } from "../../models/formInfo.model";
import moment from "moment";

@Component({
  selector: "b-event-view",
  templateUrl: "./event-view.component.html",
  styleUrls: ["./event-view.component.less"]
})
export class EventViewComponent {
  @Input()
  title = "Title";
  public eventInfo: FormInfoModel = {
    title: "",
    time: "",
    date: "",
    place: "",
    description: ""
  };
  public info: string;
  public pageId: string;
  public infoView: EventDto;
  public date;

  constructor(private route: ActivatedRoute, private eventService: EventService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pageId = params.id;
      this.eventService.getPageById(this.pageId).subscribe((infoView: EventDto) => {
        this.eventInfo.title = infoView?.title;
        this.eventInfo.place = infoView?.place;
        this.date = new Date(infoView?.date);
        const [hours, minutes] = [this.date.getHours(), this.date.getMinutes()];
        this.eventInfo.time = hours + ":" + minutes;
      });
    });
  }

  get dateString(): string {
    const momentDate = moment(this.date);
    return momentDate.format("DD.MM.YYYY");
  }
}
