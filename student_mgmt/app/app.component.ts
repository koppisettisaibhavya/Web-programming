import { Component } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model:any;
  constructor(){
    // this.model={
    //   day:0,
    //   month:0,
    //   year:2000
    // }
  }
  title = 'student';
}
