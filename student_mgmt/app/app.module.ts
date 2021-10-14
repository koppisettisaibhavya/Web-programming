import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudCreateComponent } from './stud-create/stud-create.component';
import { StudReadComponent } from './stud-read/stud-read.component';
import { StudUpdateComponent } from './stud-update/stud-update.component';
//import { DatepickerPopupComponent } from './datepicker-popup/datepicker-popup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DateComponent } from './date/date.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardComponent } from './card/card.component';
import { StudListComponent } from './stud-list/stud-list.component';
import { AddAttendanceComponent } from './add-attendance/add-attendance.component';
import { Test1Component } from './test1/test1.component';

@NgModule({
  declarations: [
    AppComponent,
    StudCreateComponent,
    StudReadComponent,
    StudUpdateComponent,
    //DatepickerPopupComponent,
    DateComponent,
    SidebarComponent,
    TopbarComponent,
    DashboardComponent,
    CardComponent,
    StudListComponent,
    AddAttendanceComponent,
    Test1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
