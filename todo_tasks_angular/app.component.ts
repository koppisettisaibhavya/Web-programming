import { Component,ViewChild, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taskitems:Array<string>=[];
  remove_items:Array<any>=[];
  textValue="";
  addTask()
  {
    this.taskitems.push(this.textValue);
  }
  // @ViewChild('TaskComponent',{static:true}) taskComponent:any;

  // ngAfterViewInit() {
  //   if(this.taskComponent?.removed)
  //   { console.log(this.taskComponent.removed.length);
  //    this.taskComponent.removed.forEach((hello: any) => {this.remove_items.push(hello);console.log();});
  //   }

  // } 
  selecteditem(item:any){
    this.remove_items.push(item);
  }
  remove()
  {
    
    this.remove_items.forEach(it=>{
      console.log(it);
      for(let i=0;i<this.taskitems.length;i++)
      {
        if(this.taskitems[i]==it)
          this.taskitems.splice(i,1);
      }
    })
  }
  constructor(){
 
  }
}