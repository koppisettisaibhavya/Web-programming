import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { StudService } from '../stud.service';
//import { ChartDataSets, ChartOptions } from 'chart.js';
import { Att, Graph } from '../modal';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  atte: Array<Att> = [];
  fig: Array<Graph> = [];
  fig1: Array<any> = [];
  fl: number;
  xvar: string[] = [];
  yvar: number[] = [];
  constructor(private studserv: StudService) {
    this.fl = 0;


  }

  ngOnInit(): void {
    this.studserv.getAllAtt().subscribe((data: Array<Att>): void => {
      this.atte = data;
      //console.log(this.atte)
      //console.log(data);
      this.atte.forEach(e1 => {
        this.fl = 0;
        for (let i = 0; i < this.fig.length; i++) {
          if (e1.date == this.fig[i].date) {
            this.fig[i].no_of_attendees += 1;
            this.fl = 1;
            break;
          }
        }
        if (this.fl == 0) {
          this.fig.push({ date: e1.date, no_of_attendees: 1 });
        }
      });
      console.log(this.fig);

      for (let i = 0; i < this.fig.length; i++) {
        this.xvar.push(this.fig[i].date)
        this.yvar.push(this.fig[i].no_of_attendees)
      }
      console.log(this.xvar, this.yvar)
      let myChart = new Chart("myChart", {
        type: 'bar',
        data: {
          labels: this.xvar,
          datasets: [{
            label: '# of Attendees',
            data: this.yvar,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
              yAxes: [{
                ticks:{
                  beginAtZero: true,
                  min:0,
                  max:10,
                  stepSize:1

                }
                  
              }]
          }
        }
      });

    

  }
    );
}
}
