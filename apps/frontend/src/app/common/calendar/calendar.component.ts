import { Component, Input, OnInit, Output } from "@angular/core";
import { CalendarService } from "../../service/calendar.service";
import moment from "moment";
import { DatesService } from "../../service/dates.service";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { DayInfoDto } from "@todolist/models/day-info.dto";
import { EventService } from "../../service/event.service";
import { EventDto } from "@todolist/models/event.dto";
import { DealDto } from "@todolist/models/deal.dto";

@Component({
  selector: "b-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.less"]
})
export class CalendarComponent {
  public date = moment();
  public datesList: { day: number; info: DayInfoDto }[] = [];
  infoModelDate: EventDto[];
  public popupVisible = false;
  public currentDayInfoModel: DayInfoDto;

  constructor(
    public calendarService: CalendarService,
    public datesService: DatesService,
    private eventService: EventService
  ) {}

  ngOnInit() {
    const firstDayOfCurrentMonthMoment = moment({ day: 1 }); //установили первый день месяца
    //прибавили один месяц
    const currentMonth = moment(firstDayOfCurrentMonthMoment);

    let counEmtyCards: number;

    // const counEmtyCards = currentMonth.isoWeekday(1);

    // оесть раз поставлен 0, значит это должен быть понедельник, и преобразовала его к формату

    //посмотреть день ндели и вчислить сколько карточек надо дорисовать
    if (firstDayOfCurrentMonthMoment != firstDayOfCurrentMonthMoment.isoWeekday(4)) {
      counEmtyCards = 4;
    } else if (firstDayOfCurrentMonthMoment != firstDayOfCurrentMonthMoment.isoWeekday(3)) {
      counEmtyCards = 3;
    } else if (firstDayOfCurrentMonthMoment != firstDayOfCurrentMonthMoment.isoWeekday(2)) {
      counEmtyCards = 2;
    } else {
      counEmtyCards = 1;
    }
    console.log(counEmtyCards);
    //   } else {
    //   (firstDayOfCurrentMonthMoment.isoWeekday(2));
    //     return firstDayOfCurrentMonthMoment++;
    //   } else {
    //   (firstDayOfCurrentMonthMoment.isoWeekday(3);
    //   return firstDayOfCurrentMonthMoment + 2;
    // }
    const lastDayOfMonthMoment = firstDayOfCurrentMonthMoment.add(1, "M").subtract(1, "d"); //вычли 1 день
    const currentDay = lastDayOfMonthMoment.get("date"); //взяли текущий день у момента
    // как нарисовать календарь не с начала недели если это у нас вторник
    // обавить, чтобы верхний блок окршивался зеленым, если в карточке есть события или задачи
    // if (firstDayOfCurrentMonthMoment.isoWeekday(1)) {
    //   return lastDayOfMonthMoment;
    // } else {
    //   return firstDayOfCurrentMonthMoment;
    // }
    // console.log(lastDayOfMonthMoment);
    // todo request to BE
    this.calendarService
      .getInfo({
        type: "month",
        date: firstDayOfCurrentMonthMoment.toISOString(true)
      })
      .subscribe((infoModel: DayInfoDto) => {
        for (let i = 1; i < currentDay; i++) {
          const events: EventDto[] = infoModel.events.filter((event: EventDto) => {
            const eventDate = event.date;
            const eventDateMoment = moment(eventDate);
            const dayMonth = eventDateMoment.get("date");
            if (dayMonth == i) {
              return true;
            } else {
              return false;
            }
            // if else взять у эвента дату, сделать из нее момент и взять день месяца
            // если день месяца совпадает с i, значит надо вернуть true
          });
          // todo
          // task
          const tasks: DealDto[] = infoModel.tasks.filter((task: DealDto) => {
            const taskDate = task.date;
            const taskDateMoment = moment(taskDate);
            const dayTaskMonth = taskDateMoment.get("date");

            if (dayTaskMonth == i) {
              return true;
            } else {
              return false;
            }
            // if else взять у эвента дату, сделать из нее момент и взять день месяца
            // если день месяца совпадает с i, значит надо вернуть true
          });
          const dayInfo: DayInfoDto = {
            date: moment(currentMonth).date(i).toISOString(true),
            eventsNumber: events.length,
            taskNumber: tasks.length,
            events: events,
            tasks: tasks
          };
          // console.log(dayInfo);
          this.datesList.push({
            day: i,
            info: dayInfo
          });
        }
      });

    for (let i = 1; i < counEmtyCards; i++) {
      this.datesList.unshift({
        day: 0,
        info: undefined
      });
    }
  } //запихнуть в for от 1 до той переменной

  get month() {
    // const month = this.date.month();
    const month = this.date.add("M");
    return month.format("MMMM, YYYY");
  }

  nextMonth() {
    const nextMonth = this.date.add(1, "M");
  }

  backMonth() {
    const backMonth = this.date.subtract(1, "M");
  }

  showPanel(dayInfoModel: DayInfoDto) {
    this.currentDayInfoModel = dayInfoModel;
    this.popupVisible = true;
  }

  // onNextMonth(): void {
  //   this.monthNumber++;
  //   if (this.monthNumber == 13) {
  //     this.monthNumber = 1;
  //     this.year++;
  //   }
  //   this.setMonth(this.calendarService.getMonth(this.monthNumber, this.year));
  // }

  // onPreviousMouth(): void {
  //   this.monthNumber--;
  //   if (this.monthNumber < 1) {
  //     this.monthNumber = 12;
  //     this.year--;
  //   }
  //   this.setMonth(this.calendarService.getMonth(this.monthNumber, this.year));
  // // }
  // private setMonth(days: CalendarDto[]): void {
  //   this.monthNumber = this.date[0].monthIndex;
  //   this.year = this.date[0].year;
  // }
}
