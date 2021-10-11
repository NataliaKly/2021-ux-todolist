export interface DayInfoModel {
  date: Date;
  eventsNumber: number;
  taskNumber: number;
  events: Event[];
  tasks: any[];
}

export interface CalendarItemModel {
  day: number;
  info: DayInfoModel;
}
