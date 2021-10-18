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
  constructor(private taskService: TaskService) {}
  public pageId: string;
  public infoTask: infoTask = {
    id: "",
    title: "",
    date: "",
    finished: true,
    important: true,
    urgent: true
  };
  addNewTask() {
    const info: DealDto = {
      id: this.pageId,
      title: this.infoTask.title,
      date: "",
      finished: true,
      important: true,
      urgent: true
    };
    const body = {
      tasks: info
    };
    this.taskService.postNewTask(body).subscribe((newInfo: EventDto) => {
      newInfo;
    });
  }
}
