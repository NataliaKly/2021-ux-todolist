import { EventDto } from "@todolist/models/event.dto";
import { DealDto } from "@todolist/models/deal.dto";

export interface DayInfoDto {
  date: string;
  eventsNumber: number;
  taskNumber: number;
  events: EventDto[];
  tasks: DealDto[];
}
