import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EventPageComponent } from "./common/event-page/event-page.component";
import { CalendarComponent } from "./common/calendar/calendar.component";
import { EventViewComponent } from "./common/event-view/event-view.component";
import { EventNewComponent } from "./common/event-new/event-new.component";
import { HomePageComponent } from "./common/home-page/home-page.component";

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
    path: "event/:id",
    component: EventPageComponent
  },
  { path: "event-view/:id", component: EventViewComponent },
  { path: "", component: CalendarComponent, pathMatch: "full" }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
