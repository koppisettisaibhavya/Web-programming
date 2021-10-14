import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudListComponent } from './stud-list/stud-list.component';
import { StudCreateComponent } from './stud-create/stud-create.component';
import { StudUpdateComponent } from './stud-update/stud-update.component';
import { AddAttendanceComponent } from './add-attendance/add-attendance.component';
import { StudReadComponent } from './stud-read/stud-read.component';
import { Test1Component } from './test1/test1.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/dashboard',
    pathMatch:'full'

  },
  {
    path:"charts",
    component:Test1Component
  },
  {
    path:"dashboard",
    component:DashboardComponent
  },
  {
    path:"stud-list",
    component:StudListComponent
  },
  {
    path:"stud-create",
    component:StudCreateComponent
  },
  {
    path:"stud-update/:id",
    component:StudUpdateComponent
  },
  {
    path:"add-attendance",
    component:AddAttendanceComponent,
    children:[
      {
        path:"stud-list",
        component:StudListComponent
      }
    ]
  },
  {
    path:"stud-read",
    component:StudReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
