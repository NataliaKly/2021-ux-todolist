import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Res } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Between, MoreThan, Repository } from "typeorm";
import { Response } from "express";
import { EventDao } from "../../db/domain/event.dao";
import { EventDto } from "@todolist/models/event.dto";
import moment = require("moment");

@Controller("/calendar")
export class CalendarController {
  constructor(
    @InjectRepository(EventDao)
    private eventsRepository: Repository<EventDao>
  ) {}

  @Post()
  async getCalendar(@Body() body: { date: string; type: string }): Promise<EventDto[]> {
    let events = [];
    if (body.type === "month") {
      const date = moment(body.date);
      date.date(1);
      const endDate = moment(date).add(1, "M").subtract(1, "d");
      events = await this.eventsRepository.find({
        where: {
          date: Between(date.toDate(), endDate.toDate())
        }
      });
    } else {
      const date = moment(body.date);
      date.hour(0).minutes(0).seconds(0).milliseconds(0);
      const endDate = moment(body.date);
      endDate.hour(0).minutes(0).seconds(0).milliseconds(0);

      let con = new Date(date.toISOString());
      let en = new Date(endDate.format("YYYY-MM-DD HH:mm"));
      console.log(date, endDate);
      console.log("----");
      console.log(con, en);

      events = await this.eventsRepository.find({
        where: {
          date: Between(date.toDate(), endDate.toDate())
        }
      });
    }

    return events.map(m => ({
      id: m.id,
      title: m.title,
      description: m.description,
      place: m.place,
      date: m.date
    }));
  }
}
