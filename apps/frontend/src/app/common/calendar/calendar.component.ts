import { Component, Input, OnInit, Output } from "@angular/core";
import { CalendarService } from "../../service/calendar.service";
import moment from "moment";
import { DatesService } from "../../service/dates.service";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "b-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.less"]
})
export class CalendarComponent {
  // public calendar: CalendarDto[] = [];
  public date = moment();
  public datesList: number[] = [];
  private unsubscribe$: Subject<void> = new Subject();
  constructor(public calendarService: CalendarService, public datesService: DatesService) {
    // this.calendarForm = d;
    // this.calendardto.isPastDate = d.setHours(0, 0, 0, 0) < moment().hours();
    // this.calendardto.isToday = d.setHours(0, 0, 0, 0) == moment().hours();
  }
  ngOnInit(): void {
    const firstDayOfCurrentMonthMoment = moment({ day: 1 }); //установили первый день месяца
    //прибавили один месяц
    const lastDayOfMonthMoment = firstDayOfCurrentMonthMoment.add(1, "M").subtract(1, "d"); //вычли 1 день
    const currentDay = lastDayOfMonthMoment.get("date"); //взяли текущий день у момента

    for (let i = 1; i < currentDay; i++) {
      this.datesList.push(i);
    }
  }
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
  // onNextMonth(): void {
  //   this.monthNumber++;
  //   if (this.monthNumber == 13) {
  //     this.monthNumber = 1;
  //     this.year++;
  //   }
  //   this.setMonth(this.calendarService.getMonth(this.monthNumber, this.year));
  // }
  //
  // onPreviousMouth(): void {
  //   this.monthNumber--;
  //   if (this.monthNumber < 1) {
  //     this.monthNumber = 12;
  //     this.year--;
  //   }
  //   this.setMonth(this.calendarService.getMonth(this.monthNumber, this.year));
  // }
  // private setMonth(days: CalendarDto[]): void {
  //   this.monthNumber = this.date[0].monthIndex;
  //   this.year = this.date[0].year;
  // }
}
