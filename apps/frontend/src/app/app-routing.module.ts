import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageTitleComponent } from "./common/page-title/page-title.component";
import { EventPageComponent } from "./common/event-page/event-page.component";
import { CalendarComponent } from "./common/calendar/calendar.component";

const routes: Routes = [
  {
    path: "page-title",
    component: PageTitleComponent,
    children: [
      {
        path: "events/:id",
        component: EventPageComponent
      }
    ]
  },
  {
    path: "calendar",
    component: CalendarComponent
  },
  { path: "", component: PageTitleComponent, pathMatch: "full" }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
