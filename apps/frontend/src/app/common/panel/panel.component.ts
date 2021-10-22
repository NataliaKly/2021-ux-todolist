import { Component, Input, Output } from "@angular/core";
import { EventDto } from "@todolist/models/event.dto";
import { ActivatedRoute, Router } from "@angular/router";
import { EventService } from "../../service/event.service";
import { FormInfoModel } from "../../models/formInfo.model";
import moment from "moment";
import { DayInfoDto } from "@todolist/models/day-info.dto";
import { CalendarService } from "../../service/calendar.service";
import { DealDto } from "@todolist/models/deal.dto";
import { TaskService } from "../../service/task.service";

@Component({
  selector: "b-panel",
  templateUrl: "./panel.component.html",
  styleUrls: ["./panel.component.less"]
})
export class PanelComponent {
  @Output() popupVisible: boolean;
  public pageId: string;
  public dateList;
  @Input() dayInfoModel: DayInfoDto; //вот наша модель из цикла из которой мы хотим что-то брать
  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private router: Router,
    private taskService: TaskService
  ) {}

  get date() {
    const dateM = this.dayInfoModel.date; //вот тут мы из нашей модели берем дату и сохраняем в переменную
    const dateMoment = moment(dateM); // тут превращаем ее в момент
    return dateMoment.format("DD.MM.YYYY"); //тут делаем ее нужного формата
  }

  timeString(date: string): string {
    const momentDate = moment(date);
    //todo
    return momentDate.format("HH:mm");
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

  openDetailsEvents() {
    this.eventService.dateEventsList.next(this.dayInfoModel.date);
    this.router.navigate(["/event-list"]);
  }
  openDetailsTasks() {
    this.taskService.dateTasksList.next(this.dayInfoModel.date);
    this.router.navigate(["/tasks-list"]);
  }
}
