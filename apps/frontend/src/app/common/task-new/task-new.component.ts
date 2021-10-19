import { Component, Input } from "@angular/core";
import { FormInfoModel } from "../../models/formInfo.model";
import { EventService } from "../../service/event.service";
import { ActivatedRoute } from "@angular/router";
import { EventDto } from "@todolist/models/event.dto";
import moment from "moment";
import { DealDto } from "@todolist/models/deal.dto";
import { CalendarService } from "../../service/calendar.service";
import { DatesService } from "../../service/dates.service";
import { infoTask } from "../../models/infoTask.model";
import { TaskService } from "../../service/task.service";

@Component({
  selector: "b-task-new",
  templateUrl: "./task-new.component.html",
  styleUrls: ["./task-new.component.less"]
})
export class TaskNewComponent {
  public pageId: string;
  public date: Date;
  public infoTask: infoTask = {
    id: "",
    title: "",
    date: "",
    finished: false,
    important: false,
    urgent: false
  };
  constructor(private taskService: TaskService) {}
  ngOnInit() {
    // this.route.params.subscribe(params => {
    //   this.pageId = params.id;
    //   this.eventService.getPageById(this.pageId).subscribe((pageForm: EventDto) => {
    //     this.formInfo.title = pageForm?.title;
    //     this.formInfo.place = pageForm?.place;
    this.date = new Date();
    // const [hours, minutes] = [this.date.getHours(), this.date.getMinutes()];
    // this.formInfo.time = hours + ":" + minutes;
  }

  addNewTask() {
    const momentDate = moment(this.date);
    const info: DealDto = {
      id: this.pageId,
      title: this.infoTask.title,
      date: momentDate.toISOString(true),
      finished: true,
      important: this.infoTask.important,
      urgent: this.infoTask.urgent
    };
    const body = {
      deal: info
    };
    this.taskService.postNewTask(body).subscribe((newInfo: DealDto) => {
      newInfo;
    });
  }
}
