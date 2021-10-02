/*import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Data Binding
  // Property Data Binding -> TS -> HTML
  // Event Data Binding -> HTML -> TS
/*import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Data Binding
  // Property Data Binding -> TS -> HTML
  // Event Data Binding -> HTML -> TS
  taskitems:Array<string>=[];
  textValue="";
  addTask()
  {
    this.taskitems.push(this.textValue);
  }
  constructor(){
  }
}*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Data Binding
  // Property Data Binding -> TS -> HTML
  // Event Data Binding -> HTML -> TS
  cards=[
    {
      title:"Free",
      price:"$0",
      no_of_users:"Single",
      Storage:"5GB",
      UnlimitedPublicProjects:true,
      CommunityAccess:true,
      UnlimitedPrivateProjects:false,
      DedicatedPhoneSupport:false,
      FreeSubdomain:false,
      MonthlyStatusReports:false
    },
    {
      title:"Plus",
      price:"$9",
      no_of_users:"5",
      Storage:"50GB",
      UnlimitedPublicProjects:true,
      CommunityAccess:true,
      UnlimitedPrivateProjects:true,
      DedicatedPhoneSupport:true,
      FreeSubdomain:true,
      MonthlyStatusReports:false
    },
    {
      title:"Pro",
      price:"$49",
      no_of_users:"Unlimited",
      Storage:"150GB",
      UnlimitedPublicProjects:true,
      CommunityAccess:true,
      UnlimitedPrivateProjects:true,
      DedicatedPhoneSupport:true,
      FreeSubdomain:true,
      MonthlyStatusReports:true
    }
  ]

  constructor(){
  }
}