import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-vertical',
  templateUrl: './vertical.component.html',
  styleUrls: ['./vertical.component.css']
})
export class VerticalComponent implements OnInit {

  id: number = 0;
  constructor(private activeRoute: ActivatedRoute) {
    this.id = this.activeRoute.snapshot.params.id;
  }


  ngOnInit(): void {
  }
  news_items = [
    {
      id:1,img:"assets/img/vertical/vertical_1.jpg",title:"Concert",
      desc:`A concert is a live music performance in front of an audience.[1] The performance may be by a single musician, sometimes then called a recital, or by a musical ensemble, such as an orchestra, choir, or band. Concerts are held in a wide variety and size of settings, from private houses and small nightclubs, dedicated concert halls, amphitheatres and parks, to large multipurpose buildings, such as arenas and stadiums. Indoor concerts held in the largest venues are sometimes called arena concerts or amphitheatre concerts. Informal names for a concert include show and gig.

      Regardless of the venue, musicians usually perform on a stage (if not actual then an area of the floor designated as such). Concerts often require live event support with professional audio equipment. Before recorded music, concerts provided the main opportunity to hear musicians play. For large concerts or concert tours, the challenging logistics of arranging the musicians, venue, equipment and audience (ticket sales) are handled by professional tour promoters.`
    },
    {
      id:2,img:"assets/img/vertical/vertical_2.jpg",title:"Sea beach",
      desc:`Purisituated on the eastern sea-bed of India, is the only most popular sea-side resort where the beauty of the sky in radiant colours, the roaring waves and the golden beach can be experienced.The long sandy beach draws large numbers of western travellers and Indians. According to Hindu belief, there are five great holy spots (Pancha Tirthas) at Puri out of which sea is the greatest and holiest for tourists and …`
    },
    {
      id:3,img:"assets/img/vertical/vertical_3.jpg",title:"bike show",
      desc:`Experience the thrill of authentic racing in Moto GP Bike Race! Ride the ultra fast motorcycle through fast moving highway traffic and leave the competition behind!

      Moto GP Bike Race – 3D GP Motorcycle Racing is a fast-paced game with a challenging track for the true bike racers!
      
      Experience realistic bike controls and ride simulation with high quality graphics and smooth 3D animations.
      
      Use nitro (NOS) power-up to boost the speed of your bike as you race on the busy highway. Collect coins on the way, and gain extra points for near misses! But don’t crash into any vehicle, else you’ll end up making an acrobatic landing!
      
      If you are a fan of super bike racing and have a daring traffic racer in you, then you’ll love Moto GP Bike Race game!`
    },
    {
      id:4,img:"assets/img/vertical/vertical_4.jpg",title:"see beach",
      desc:`Purisituated on the eastern sea-bed of India, is the only most popular sea-side resort where the beauty of the sky in radiant colours, the roaring waves and the golden beach can be experienced.The long sandy beach draws large numbers of western travellers and Indians. According to Hindu belief, there are five great holy spots (Pancha Tirthas) at Puri out of which sea is the greatest and holiest for tourists and …`
    },
    {
      id:5,img:"assets/img/vertical/vertical_5.jpg",title:"skating",
      desc:`Ice skating is the self-propulsion and gliding of a person across an ice surface, using metal-bladed
      ice skates. People skate for various reasons, including recreation (fun), exercise, competitive sports,
       and commuting. Ice skating may be performed on naturally frozen bodies of water, such as ponds, lakes, 
       canals, and rivers; and on man-made ice surfaces such as ice rinks, 
     ice hockey rinks, and arenas, both indoors and outdoors.`
    }
  ]
}
