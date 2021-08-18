import { Module } from "@nestjs/common";
import { DbModule } from "../../db/db.module";
import { EventsController } from "./events.controller";

@Module({
  imports: [DbModule],
  controllers: [EventsController]
})
export class EventsModule {}
