import { Module } from "@nestjs/common";
import { DbModule } from "../../db/db.module";
import { CalendarController } from "./calendar.controller";
import { EventsModule } from "../events/events.module";

@Module({
  imports: [DbModule, EventsModule],
  controllers: [CalendarController]
})
export class CalendarModule {}
