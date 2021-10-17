import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LinkService } from '../link.service';
import { Link } from '../modal';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit {
  links: Array<Link> = [];
  obj: Link = Object();
  //id:number=0;
  id: number = 0;
  constructor(private serv: LinkService, private activeroute: ActivatedRoute, private router: Router) { }
  load() {
    this.serv.getAlllinks().subscribe((data: Array<Link>) => {
      this.links = data;
    })
  }
  ngOnInit(): void {
    this.load()
  }
  
  edit_count(id?: number): void {
    for(let i=0;i<this.links.length;i++)
    {
      if(this.links[i].id==id)
      {
        this.links[i].no_of_clicks+=1;
        this.obj=this.links[i];
        break;
      }
    }
    //this.links[id?-1].no_of_clicks+=1;

    this.serv.updatelink(this.obj, id).subscribe(() => {
      this.load();
    },()=>{});
    
     
   
  }

}

