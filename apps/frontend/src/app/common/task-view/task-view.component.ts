import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { EventDto } from "@todolist/models/event.dto";
import { ActivatedRoute } from "@angular/router";
import { EventService } from "../../service/event.service";
import { FormInfoModel } from "../../models/formInfo.model";
import moment from "moment";
import { infoTask } from "../../models/infoTask.model";
import { DealDto } from "@todolist/models/deal.dto";
import { TaskService } from "../../service/task.service";

@Component({
  selector: "b-task-view",
  templateUrl: "./task-view.component.html",
  styleUrls: ["./task-view.component.less"]
})
export class TaskViewComponent {
  @Input()
  title = "Title";
  public infoTask: infoTask = {
    id: "",
    title: "",
    date: "",
    finished: false,
    important: false,
    urgent: false
  };
  public info: string;
  public pageId: string;
  public date;

  constructor(private route: ActivatedRoute, private taskService: TaskService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pageId = params.id;
      this.taskService.getPageById(this.pageId).subscribe((infoView: DealDto) => {
        this.infoTask.title = infoView?.title;
        this.infoTask.finished = infoView?.finished;
        this.infoTask.important = infoView?.important;
        this.infoTask.urgent = infoView?.urgent;
        this.date = new Date(infoView?.date);
      });
    });
  }
  saveTask() {
    const momentDate = moment(this.date);
    const info: DealDto = {
      id: this.pageId,
      title: this.infoTask.title,
      date: momentDate.toISOString(true),
      finished: this.infoTask.finished,
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
  get dateString(): string {
    const momentDate = moment(this.date);
    return momentDate.format("DD.MM.YYYY");
  }
  loadHotels(): void {
    const filter = {
      title: this.infoTask.title,
      finished: this.infoTask.finished
    };
  }
  deleteTask(pageId: string): void {
    this.taskService.deleteTask(pageId).subscribe(res => {
      this.loadHotels();
    });
  }
}
