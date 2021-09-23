import { NgModule } from "@angular/core";
import { CommonModule as NgCommonModule } from "@angular/common";
import { AngularSvgIconModule } from "angular-svg-icon";
import { PageTitleComponent } from "./page-title/page-title.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "../app-routing.module";
import { RouterModule } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { EventPageComponent } from "./event-page/event-page.component";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { CalendarComponent } from "./calendar/calendar.component";

const components = [PageTitleComponent, CalendarComponent];

@NgModule({
  imports: [
    NgCommonModule,
    AngularSvgIconModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [EventPageComponent, PageTitleComponent, CalendarComponent],
  exports: [EventPageComponent, PageTitleComponent]
})
export class CommonModule {}
