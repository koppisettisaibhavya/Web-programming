import { Component, OnInit } from '@angular/core';
import { StudService } from '../stud.service';
import {Att} from '../modal';


@Component({
  selector: 'app-stud-read',
  templateUrl: './stud-read.component.html',
  styleUrls: ['./stud-read.component.css']
})
export class StudReadComponent implements OnInit {
  attList:Array<Att>=[];
  constructor(private studserv:StudService) { }

  ngOnInit(): void {
    this.studserv.getAllAtt().subscribe((data:Array<Att>)=>
    this.attList=data);
  }
  
}
