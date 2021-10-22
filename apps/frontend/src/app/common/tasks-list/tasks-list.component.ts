import { Component, Input } from "@angular/core";
import { FormInfoModel } from "../../models/formInfo.model";
import { EventDto } from "@todolist/models/event.dto";
import { ActivatedRoute } from "@angular/router";
import { EventService } from "../../service/event.service";
import moment from "moment";
import { DealDto } from "@todolist/models/deal.dto";
import { TaskService } from "../../service/task.service";

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
  tasks: DealDto[] = [];
  taskTime: string;
  constructor(private route: ActivatedRoute, private eventService: EventService, private tasksService: TaskService) {}

  ngOnInit() {
    this.tasksService.dateTasksList.subscribe((date: string) => {
      const momentDate = moment(this.date);
      momentDate.format("DD.MM.YYYY");

      const body = {
        date: momentDate.toISOString(true)
      };
      this.date = date;
      this.tasksService.postTasksList(body).subscribe((tasks: DealDto[]) => {
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
  // dateForTasksList() {
  //   return this.tasksService.dateTasksList.subscribe((date: string) => {
  //     this.date = date;
  //   });
  // }
}
