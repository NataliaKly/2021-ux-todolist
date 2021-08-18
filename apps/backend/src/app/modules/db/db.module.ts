import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EventDao } from "./domain/event.dao";
import { DealDao } from "./domain/deal.dao";

@Module({
  imports: [TypeOrmModule.forFeature([DealDao, EventDao])],
  exports: [TypeOrmModule]
})
export class DbModule {}
