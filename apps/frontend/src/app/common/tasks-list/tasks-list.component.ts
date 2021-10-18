import { Component, Input } from "@angular/core";
import { FormInfoModel } from "../../models/formInfo.model";
import { EventDto } from "@todolist/models/event.dto";
import { ActivatedRoute } from "@angular/router";
import { EventService } from "../../service/event.service";
import moment from "moment";

@Component({
  selector: "b-tasks-list",
  templateUrl: "./tasks-list.component.html",
  styleUrls: ["./tasks-list.component.less"]
})
export class TasksListComponent {
  @Input()
  title = "Title";
  public info: string;
  public pageId: string;
  public infoView: EventDto;
  public date;
  isTrue = false;
  tasks: EventDto[] = [];
  taskTime: string;
  constructor(private route: ActivatedRoute, private eventService: EventService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pageId = params.id;
      this.eventService.getEventsList().subscribe((tasks: EventDto[]) => {
        this.tasks = tasks;
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
