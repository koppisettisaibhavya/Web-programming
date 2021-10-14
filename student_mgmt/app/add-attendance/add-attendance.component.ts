import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudService } from '../stud.service';
import {Att} from '../modal';

@Component({
  selector: 'app-add-attendance',
  templateUrl: './add-attendance.component.html',
  styleUrls: ['./add-attendance.component.css']
})
export class AddAttendanceComponent implements OnInit {
  //obj:Array<Att>=[];
  rollno="";
  date="";
  status="";

  constructor(private router:Router,private studserv:StudService) {
   }

  ngOnInit(): void {
  }
  get()
  {
    console.log(this.rollno,typeof this.rollno)
    console.log(this.date,typeof this.date)
    console.log(this.status,typeof this.status)
    let obj={'rollno':this.rollno,
    'date':this.date,
    'status':this.status};
    this.studserv.saveatt(obj).subscribe(()=>{
      this.router.navigate(['/stud-read']);
    },
    ()=>{
      alert("wrong");
    })
  }
}
