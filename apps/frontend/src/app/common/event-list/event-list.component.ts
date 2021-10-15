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
  eventTime: string;
  constructor(private route: ActivatedRoute, private eventService: EventService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pageId = params.id;
      this.eventService.getEventsList().subscribe((events: EventDto[]) => {
        this.events = events;
      });
    });
  }
  completion(timeEvent: string): string {
    const momentDate = moment(); //тут лежит текущая дата
    const momentTime = moment(timeEvent); //тут момент для даты события
    // ( но она же тоже строкой является)
    if (moment(momentTime).isBefore(momentDate)) {
      //первое у нас должно быть текущая дата,
      // с ней мы сравниваем время из события и если оно раньше было то применяем класс
      return "_completion";
    } else {
      return "";
    }
  }

  dateString(date: string): string {
    const momentDate = moment(date);
    return momentDate.format("DD.MM.YYYY");
  }

  timeString(date: string): string {
    const momentDate = moment(date);
    //todo
    return momentDate.format("HH:mm");
  }
}
