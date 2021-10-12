import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Res } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Between, Repository } from "typeorm";
import { Response } from "express";
import { EventDao } from "../../db/domain/event.dao";
import { EventDto } from "@todolist/models/event.dto";
import { DayInfoDto } from "@todolist/models/day-info.dto";
import { DealDao } from "../../db/domain/deal.dao";
import { DealDto } from "@todolist/models/deal.dto";
import moment = require("moment");

@Controller("/events")
export class EventsController {
  constructor(
    @InjectRepository(EventDao)
    private eventsRepository: Repository<EventDao>
  ) {}

  @Get()
  async getEvents(): Promise<EventDto[]> {
    const events = await this.eventsRepository.find();
    return events.map(m => ({
      id: m.id,
      title: m.title,
      description: m.description,
      place: m.place,
      date: m.date
    }));
  }

  @Get(":id")
  async getEvent(@Param() params): Promise<EventDto> {
    const event = await this.eventsRepository.findOne(params.id);
    return {
      id: event.id,
      title: event.title,
      description: event.description,
      place: event.place,
      date: event.date
    };
  }

  @Post()
  async addEvent(@Body() body: { event: EventDto }): Promise<EventDto> {
    const event = await this.eventsRepository.save({
      title: body.event.title,
      description: body.event.description,
      place: body.event.place,
      date: body.event.date
    });

    return {
      id: event.id,
      title: event.title,
      description: event.description,
      place: event.place,
      date: event.date
    };
  }

  @Patch(":id")
  async updateEvent(@Body() body: { event: EventDto }): Promise<EventDto> {
    const event = await this.eventsRepository.save({
      id: body.event.id,
      title: body.event.title,
      description: body.event.description,
      place: body.event.place,
      date: body.event.date
    });

    return {
      id: event.id,
      title: event.title,
      description: event.description,
      place: event.place,
      date: event.date
    };
  }

  @Delete(":id")
  async deleteEvent(@Param() params, @Res() res: Response): Promise<void> {
    await this.eventsRepository.delete(params.id);
    res.status(HttpStatus.OK).send();
  }

  @Post("forDate")
  async getEventsByDate(@Body() body: { date: string }): Promise<EventDto[]> {
    const date = moment(body.date);
    date.hour(4).minutes(0).seconds(0).milliseconds(0);
    const endDate = moment(body.date);
    endDate.hour(4).minutes(0).seconds(0).milliseconds(0);
    endDate.add(1, "d").subtract(1, "ms");
    const events = await this.eventsRepository.find({
      where: {
        date: Between(date.toISOString(), endDate.toISOString())
      }
    });
    return events.map(m => ({
      id: m.id,
      title: m.title,
      description: m.description,
      place: m.place,
      date: m.date
    }));
  }
}
