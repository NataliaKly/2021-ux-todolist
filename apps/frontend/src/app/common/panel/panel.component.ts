import { Component, Input, Output } from "@angular/core";
import { EventDto } from "@todolist/models/event.dto";
import { ActivatedRoute } from "@angular/router";
import { EventService } from "../../service/event.service";
import { FormInfoModel } from "../../models/formInfo.model";
import moment from "moment";
import { DayInfoModel } from "../../models/day-info.model";

@Component({
  selector: "b-panel",
  templateUrl: "./panel.component.html",
  styleUrls: ["./panel.component.less"]
})
export class PanelComponent {
  @Output() popupVisible: boolean;

  @Input()
  dayInfoModel: DayInfoModel;

  public info: string;
  public pageId: string;
  public infoView: EventDto;
  public date;
  public eventInfo: FormInfoModel = {
    title: "",
    time: "",
    date: "",
    place: "",
    description: ""
  };
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
