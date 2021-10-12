import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Res } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Between, MoreThan, Repository } from "typeorm";
import { Response } from "express";
import { EventDao } from "../../db/domain/event.dao";
import { EventDto } from "@todolist/models/event.dto";
import moment = require("moment");
import { DayInfoDto } from "@todolist/models/day-info.dto";
import { DealDao } from "../../db/domain/deal.dao";
import { DealDto } from "@todolist/models/deal.dto";

@Controller("/calendar")
export class CalendarController {
  constructor(
    @InjectRepository(EventDao)
    private eventsRepository: Repository<EventDao>,
    @InjectRepository(DealDao)
    private dealsRepository: Repository<DealDao>
  ) {}

  @Post()
  async getCalendar(@Body() body: { date: string; type: string }): Promise<DayInfoDto> {
    let events: EventDao[];
    let deals: DealDao[];
    if (body.type === "month") {
      const date = moment(body.date);
      date.date(1);
      const endDate = moment(date).add(1, "M").subtract(1, "d");
      events = await this.eventsRepository.find({
        where: {
          date: Between(date.toDate(), endDate.toDate())
        }
      });
      deals = await this.dealsRepository.find({
        where: {
          date: Between(date.toDate(), endDate.toDate())
        }
      });
    } else {
      const date = moment(body.date);
      date.hour(4).minutes(0).seconds(0).milliseconds(0);
      const endDate = moment(body.date);
      endDate.hour(4).minutes(0).seconds(0).milliseconds(0);
      endDate.add(1, "d").subtract(1, "ms");

      events = await this.eventsRepository.find({
        where: {
          date: Between(date.toISOString(), endDate.toISOString())
        }
      });
      deals = await this.dealsRepository.find({
        where: {
          date: Between(date.toDate(), endDate.toDate())
        }
      });
    }
    const eventsDto: EventDto[] = events.map(m => ({
      id: m.id,
      title: m.title,
      description: m.description,
      place: m.place,
      date: m.date
    }));
    const dealsDto: DealDto[] = deals.map(m => ({
      id: m.id,
      title: m.title,
      date: m.date,
      finished: m.finished,
      important: m.important,
      urgent: m.urgent
    }));

    return {
      date: body.date,
      eventsNumber: eventsDto.length,
      taskNumber: dealsDto.length,
      events: eventsDto,
      tasks: dealsDto
    };
  }
}
