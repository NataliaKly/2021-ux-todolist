import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { CommonModule } from "./common/common.module";
import { AngularSvgIconModule } from "angular-svg-icon";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatInputModule } from "@angular/material/input";
import { EventService } from "./service/event.service";
import { CalendarService } from "./service/calendar.service";
import { DatesService } from "./service/dates.service";
import { TaskService } from "./service/task.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    RouterModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [EventService, CalendarService, DatesService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule {}
