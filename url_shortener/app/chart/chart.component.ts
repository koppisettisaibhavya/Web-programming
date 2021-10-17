import { Component, OnInit } from '@angular/core';
import {Chart,registerables} from 'chart.js'
import { LinkService } from '../link.service';
import {Link} from '../modal';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  xvar:Array<string>=[];
  yvar:Array<number>=[];
  constructor(private serv:LinkService) { }

  ngOnInit(): void {
    Chart.register(...registerables);
    this.serv.getAlllinks().subscribe((data:Array<Link>)=>{
      data.forEach((ele)=>{
        this.xvar.push(ele.url)
        this.yvar.push(ele.no_of_clicks)
      })
      console.log(this.xvar,this.yvar);
      let myChart = new Chart("myChart", {
        type: "bar",
        data: {
          labels: this.xvar,
          datasets: [{
            label: '# of clicks',
            data: this.yvar,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: "black" ,
            borderWidth: 1
          }]
        },
        options: {
          scales: {
              y: {
                suggestedMin:0,
                suggestedMax:10
              }
          }
        }
      });
    })

    

  }
}
