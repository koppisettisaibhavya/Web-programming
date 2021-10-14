import { Component, Input, OnInit } from '@angular/core';
import { StudService } from '../stud.service';
import { Stud } from '../modal';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() title:string = '';
  @Input() count:number = 0;
  constructor(private studserv:StudService) {
    this.studserv.getAllStud().subscribe((data:Array<Stud>) => {
      this.count = data.length;
     })
   }

  ngOnInit(): void {
  }

}
