import { Component, Input, OnInit } from "@angular/core";
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
    const numberCalendar = moment({ day: 1 }); //установили первый день месяца
    const addMonth = numberCalendar.add(1, "M"); //прибавили один месяц
    const subtractMonth = addMonth.subtract(1, "d"); //вычли 1 день
    const currentDay = subtractMonth.get("date"); //взяли текущий день у момента

    for (let i = 1; i < currentDay; i++) {
      this.datesList.push(i);
    }
    // this.datesService
    //   .getDates()
    //   .pipe(takeUntil(this.unsubscribe$))
    //   .subscribe((dates: number[]) => {
    //     this.datesList = dates;
    //   });
  }

  // getMonth() {
  //   // const firstday = this.createDay();
  //   for (let i = 0; 1 < i; i++) {
  //     if (i > 30);
  //     numberCalendar.add(1, "d");
  //     const newDate = this.array.push(numberCalendar);
  //     newDate.add(1, "d");
  //     this.array.push(newDate);
  //   }
  //   this.array.push(this.createDay(numberCalendar));
  // }

  // ngOnInit(): void {
  //   this.generateCalendarDays();
  // }
  // private generateCalendarDays(): void {
  //   this.calendar = [];
  //   const day: moment.Moment = moment();
  //   const startingDateOfCalendar = this.getStartDateForCalendar(day);
  //   let dateToAdd = startingDateOfCalendar;
  //   for (let i = 0; i < 42; i++) {
  //     this.calendar.push(new CalendarDto());
  //     dateToAdd = moment()(dateToAdd.setDate(dateToAdd.getDate() + 1));
  //   }
  // }
  // private getStartDateForCalendar(selectedDate: Date) {
  //   const lastDayOfPreviousMonth = new Date(selectedDate.setDate(0));
  //   let startingDateOfCalendar: Date = lastDayOfPreviousMonth;
  //   if (startingDateOfCalendar.getDay() != 1) {
  //     do {
  //       startingDateOfCalendar = new Date(startingDateOfCalendar.setDate(startingDateOfCalendar.getDate() - 1));
  //     } while (startingDateOfCalendar.getDay() != 1);
  //   }
  //   return startingDateOfCalendar;
  // }
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
