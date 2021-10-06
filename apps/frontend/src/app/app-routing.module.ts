import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageTitleComponent } from "./common/page-title/page-title.component";
import { EventPageComponent } from "./common/event-page/event-page.component";
import { CalendarComponent } from "./common/calendar/calendar.component";
import { EventViewComponent } from "./common/event-view/event-view.component";
import { PopupComponent } from "./common/popup/popup.component";

const routes: Routes = [
  {
    path: "calendar",
    component: CalendarComponent
  },
  {
    path: "page-title",
    component: PageTitleComponent,
    children: [
      {
        path: "events/:id",
        component: EventPageComponent
      },
      { path: "event-view", component: EventViewComponent }
    ]
  },
  { path: "popup", component: PopupComponent},
  { path: "", component: CalendarComponent, pathMatch: "full" }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
