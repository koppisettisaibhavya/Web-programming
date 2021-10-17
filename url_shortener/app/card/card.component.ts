import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Output() event1=new EventEmitter();
  title:string="";
  count:number=0;

    constructor() { }

  ngOnInit(): void {
  }
  flag()
  {
    this.event1.emit(true)
  }
}
