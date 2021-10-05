import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(){}

  trending_bottom=[
    {
      id:1,img:"assets/img/horizontal/horizontal_1.jpg",title:"lifestyle",
      color:"color1",desc:`Lifestyle is the interests, opinions, behaviours of an individual `
    },
    {
      id:2,img:"assets/img/horizontal/horizontal_2.jpg",title:"sports",
      color:"color2",desc:`Sport pertains to any form of competitive physical activity maintain physical ability`
    },
    {
      id:3,img:"assets/img/horizontal/horizontal_3.jpg",title:"travel",
      color:"color3",desc:`Travel is the movement of people between distant locations.`
    }
  ]
  trending_right=[
    {
      id:1,img:"assets/img/vertical/vertical_1.jpg",title:"Concert",
      color:"color1",desc:`A concert is a live music performance `
    },
    {
      id:2,img:"assets/img/vertical/vertical_2.jpg",title:"Sea beach",
      color:"color2",desc:`A beach is a landform alongside a body of water `
    },
    {
      id:3,img:"assets/img/vertical/vertical_3.jpg",title:"Bike show",
      color:"color3",desc:`The Car & Bike Show is an automobile programme.`
    },
    {
      id:4,img:"assets/img/vertical/vertical_4.jpg",title:"see beach",
      color:"color4",desc:`A beach is a narrow, gently sloping strip of land`
    },
    {
      id:5,img:"assets/img/vertical/vertical_5.jpg",title:"skating",
      color:"color4",desc:"Skating is amazing"
    }
  ]
  ngOnInit(){}

}
