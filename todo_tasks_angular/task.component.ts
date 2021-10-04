import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() myData?:string;
  @Output() selectEvent =new EventEmitter();
  removed:Array<any>=[];
  constructor() { }

  ngOnInit(): void {
  }

  selected(item:any)
  {
    this.selectEvent.emit(item);
  }

}