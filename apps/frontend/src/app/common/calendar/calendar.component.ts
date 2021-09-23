import { Component, OnInit } from "@angular/core";
import { FormInfoModel } from "../../models/formInfo.model";
import { EventService } from "../../service/event.service";
import { ActivatedRoute } from "@angular/router";
import { EventDto } from "@todolist/models/event.dto";
import { isDateString } from "class-validator";
import { formatDate } from "@angular/common";
import { CalendarDto } from "../../../../../../libs/models/calendar.dto";
import { CalendarService } from "../../service/calendar.service";

@Component({
  selector: "b-page-list",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.less"]
})
export class CalendarComponent implements OnInit {
  public monthNumber: number;
  public year: number;
  public date: CalendarDto[];
  constructor(public calendarService: CalendarService) {}
  ngOnInit(): void {
    this.setMonth(this.calendarService.getCurrentMonth());
  }
  onNextMonth(): void {
    this.monthNumber++;
    if (this.monthNumber == 13) {
      this.monthNumber = 1;
      this.year++;
    }
    this.setMonth(this.calendarService.getMonth(this.monthNumber, this.year));
  }

  onPreviousMouth(): void {
    this.monthNumber--;
    if (this.monthNumber < 1) {
      this.monthNumber = 12;
      this.year--;
    }
    this.setMonth(this.calendarService.getMonth(this.monthNumber, this.year));
  }
  private setMonth(days: CalendarDto[]): void {
    this.monthNumber = this.date[0].monthIndex;
    this.year = this.date[0].year;
  }
}
