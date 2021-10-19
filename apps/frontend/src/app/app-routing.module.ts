import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EventPageComponent } from "./common/event-page/event-page.component";
import { CalendarComponent } from "./common/calendar/calendar.component";
import { EventViewComponent } from "./common/event-view/event-view.component";
import { HomePageComponent } from "./common/home-page/home-page.component";
import { EventNewComponent } from "./common/event-new/event-new.component";
import { EventListComponent } from "./common/event-list/event-list.component";
import { TasksListComponent } from "./common/tasks-list/tasks-list.component";
import { TaskNewComponent } from "./common/task-new/task-new.component";
import { TaskViewComponent } from "./common/task-view/task-view.component";

const routes: Routes = [
  {
    path: "home-page",
    component: HomePageComponent
  },
  {
    path: "new",
    component: EventNewComponent
  },
  {
    path: "new-task",
    component: TaskNewComponent
  },
  {
    path: "event/:id",
    component: EventPageComponent
  },
  { path: "event-view/:id", component: EventViewComponent },
  { path: "event-list/:id", component: EventListComponent },
  { path: "tasks-list/:id", component: TasksListComponent },
  { path: "task-view/:id", component: TaskViewComponent },
  { path: "", component: CalendarComponent, pathMatch: "full" }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
