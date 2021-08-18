import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Res } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DealDao } from "../../db/domain/deal.dao";
import { Repository } from "typeorm";
import { DealDto } from "@todolist/models/deal.dto";
import { Response } from "express";

@Controller("/deals")
export class DealsController {
  constructor(
    @InjectRepository(DealDao)
    private dealsRepository: Repository<DealDao>
  ) {}

  @Get()
  async getDeals(): Promise<DealDto[]> {
    const deals = await this.dealsRepository.find();
    return deals.map(m => ({
      id: m.id,
      title: m.title,
      finished: m.finished,
      important: m.important,
      urgent: m.urgent
    }));
  }

  @Get(":id")
  async getDeal(@Param() params): Promise<DealDto> {
    const deal = await this.dealsRepository.findOne(params.id);
    return {
      id: deal.id,
      title: deal.title,
      finished: deal.finished,
      important: deal.important,
      urgent: deal.urgent
    };
  }

  @Post()
  async addDeal(@Body() body: { deal: DealDto }): Promise<DealDto> {
    const deal = await this.dealsRepository.save({
      title: body.deal.title,
      finished: body.deal.finished,
      important: body.deal.important,
      urgent: body.deal.urgent
    });

    return {
      id: deal.id,
      title: deal.title,
      finished: deal.finished,
      important: deal.important,
      urgent: deal.urgent
    };
  }

  @Patch()
  async updateDeal(@Body() body: { deal: DealDto }): Promise<DealDto> {
    const deal = await this.dealsRepository.save({
      id: body.deal.id,
      title: body.deal.title,
      finished: body.deal.finished,
      important: body.deal.important,
      urgent: body.deal.urgent
    });

    return {
      id: deal.id,
      title: deal.title,
      finished: deal.finished,
      important: deal.important,
      urgent: deal.urgent
    };
  }

  @Delete(":id")
  async deleteDeal(@Param() params, @Res() res: Response): Promise<void> {
    await this.dealsRepository.delete(params.id);
    res.status(HttpStatus.OK).send();
  }
}
