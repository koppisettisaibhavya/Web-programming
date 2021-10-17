import { Component, OnInit } from '@angular/core';
import { LinkService } from '../link.service';
import {Link} from '../modal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  count_links:number=0;
  count_clicks:number=0;
  constructor(private serve:LinkService) { }

  ngOnInit(): void {
    this.serve.getAlllinks().subscribe((data:Array<Link>)=>{
      this.count_links=data.length
      data.forEach(ele=>this.count_clicks+=ele.no_of_clicks);
    });
  }

}
