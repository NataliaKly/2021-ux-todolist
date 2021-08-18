import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageTitleComponent } from "./common/page-title/page-title.component";

const routes: Routes = [{ path: "", component: PageTitleComponent, pathMatch: "full" }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
