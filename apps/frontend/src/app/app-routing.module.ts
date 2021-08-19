import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageTitleComponent } from "./common/page-title/page-title.component";
import { EventPageComponent } from "./common/event-page/event-page.component";

const routes: Routes = [
  {
    path: "event/:176d006b-c141-40f3-a2ef-6269c8038107",
    component: EventPageComponent
  },
  {
    path: "task/:id"
  },
  { path: "", component: PageTitleComponent, pathMatch: "full" }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
