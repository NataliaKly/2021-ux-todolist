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
import { EventViewComponent } from "./event-view/event-view.component";
import { EventNewComponent } from "./event-new/event-new.component";
import { PanelComponent } from "./panel/panel.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { HomePageComponent } from "./home-page/home-page.component";
import { CalendarItemComponent } from "./calendar/calendar-item/calendar-item.component";
import { EventListComponent } from "./event-list/event-list.component";
import { TasksListComponent } from "./tasks-list/tasks-list.component";
import { TaskNewComponent } from "./task-new/task-new.component";

const components = [
  PageTitleComponent,
  CalendarComponent,
  EventViewComponent,
  CalendarComponent,
  CalendarItemComponent,
  EventNewComponent,
  PanelComponent,
  HomePageComponent,
  EventListComponent,
  TasksListComponent,
  TaskNewComponent
];

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
    MatNativeDateModule,
    MatExpansionModule
  ],
  declarations: [
    EventPageComponent,
    PageTitleComponent,
    CalendarComponent,
    EventViewComponent,
    CalendarItemComponent,
    EventNewComponent,
    PanelComponent,
    HomePageComponent,
    EventListComponent,
    TasksListComponent,
    TaskNewComponent
  ],
  exports: [
    EventPageComponent,
    PageTitleComponent,
    CalendarComponent,
    EventViewComponent,
    CalendarItemComponent,
    EventNewComponent,
    PanelComponent,
    HomePageComponent,
    EventListComponent,
    TasksListComponent,
    TaskNewComponent
  ]
})
export class CommonModule {}
