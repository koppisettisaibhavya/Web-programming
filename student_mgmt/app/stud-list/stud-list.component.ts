import { Component, OnInit } from '@angular/core';
import {Stud } from '../modal';
import { StudService } from '../stud.service';
//import { StudService } from '../stud.service';
@Component({
  selector: 'app-stud-list',
  templateUrl: './stud-list.component.html',
  styleUrls: ['./stud-list.component.css']
})
export class StudListComponent implements OnInit {
  studList:Array<Stud> = []
  constructor(private studserv:StudService) {
  
    console.log(this.studList)
   }
 
   ngOnInit(): void {
     this.loadData()
   }

  loadData(){
    this.studserv.getAllStud().subscribe((data:Array<Stud>) => {
      this.studList = data
     })
  }
  deleteData(id?:number){
    this.studserv.deleteUserById(id).subscribe(() => {
      this.loadData()
    })
  }
}
