import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { EventDto } from "@todolist/models/event.dto";
import { ActivatedRoute } from "@angular/router";
import { EventService } from "../../service/event.service";
import { FormInfoModel } from "../../models/formInfo.model";

@Component({
  selector: "b-event-view",
  templateUrl: "./event-view.component.html",
  styleUrls: ["./event-view.component.less"]
})
export class EventViewComponent {
  // @Input()
  // title = "Title";
  // public formInfo: FormInfoModel = {
  //   title: "",
  //   time: "",
  //   date: "",
  //   place: "",
  //   description: ""
  // };
  // public pageId: string;
  // public date: Date;
  // public datePage;
  // constructor(private route: ActivatedRoute, private eventService: EventService) {}
  // ngOnInit() {
  //   this.route.params.subscribe(params => {
  //     this.pageId = params.id;
  //     this.eventService.getPageById(this.pageId).subscribe((pageForm: EventDto) => {
  //       this.formInfo.title = pageForm?.title;
  //       this.formInfo.place = pageForm?.place;
  //       this.date = new Date(pageForm?.date);
  //       const [hours, minutes] = [this.date.getHours(), this.date.getMinutes()];
  //       this.formInfo.time = hours + ":" + minutes;
  //     });
  //   });
  // }
  // get dateString(): string {
  //   const dateString = this.date;
  //   return dateString.toDateString();
  // }
  // info: EventDto = {
  //   title: this.formInfo.title,
  //   place: this.formInfo.place,
  //   date: this.date.toISOString(),
  //   id: this.pageId,
  //   description: this.formInfo.description
  // };
  // body = {
  //   event: this.info
  // };
  // inputControl: FormControl = new FormControl(this.title);
}
