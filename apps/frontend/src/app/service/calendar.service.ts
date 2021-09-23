import { Injectable } from "@angular/core";
import { CalendarDto } from "../../../../../libs/models/calendar.dto";

@Injectable()
export class CalendarService {
  public currentYear: number;
  public currentMonth: number;
  public day: CalendarDto;
  constructor() {
    const date = new Date();
    this.currentYear = date.getFullYear();
    this.currentMonth = date.getMonth();
  }
  public getCurrentMonth(): CalendarDto[] {
    return this.getMonth(this.currentMonth, this.currentYear);
  }
  public getMonth(monthIndex: number, year: number): CalendarDto[] {
    const days = [];
    const firstday = this.createDay(monthIndex, year);
    for (let i = 1; i < firstday.monthIndex; i++) {
      days.push({
        monthIndex: monthIndex,
        year: year
      } as CalendarDto);
    }
    days.push(firstday);
    const countDaysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    for (let i = 2; i < countDaysInMonth + 1; i++) {
      days.push(this.createDay(monthIndex, year));
    }
    return days;
  }
  private createDay(monthIndex: number, year: number) {
    const day = new CalendarDto();
    day.monthIndex = monthIndex;
    day.month = this.getMonthName(monthIndex);
    day.year = this.currentYear;
    return day;
  }

  public getMonthName(monthIndex: number) {
    switch (monthIndex) {
      case 0:
        return "January";
      case 1:
        return "February";
      case 2:
        return "March";
      case 3:
        return "April";
      case 4:
        return "May";
      case 5:
        return "June";
      case 6:
        return "July";
      case 7:
        return "August";
      case 8:
        return "September";
      case 9:
        return "October";
      case 10:
        return "November";
      case 11:
        return "December";
      default:
        return "";
    }
  }
}
