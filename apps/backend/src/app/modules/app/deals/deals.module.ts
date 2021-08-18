import { Module } from "@nestjs/common";
import { DbModule } from "../../db/db.module";
import { DealsController } from "./deals.controller";

@Module({
  imports: [DbModule],
  controllers: [DealsController],
})
export class DealsModule {}
