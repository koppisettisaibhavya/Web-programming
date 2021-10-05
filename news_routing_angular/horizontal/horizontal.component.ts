import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-horizontal',
  templateUrl: './horizontal.component.html',
  styleUrls: ['./horizontal.component.css']
})
export class HorizontalComponent implements OnInit {
  id:number = 0;
  constructor(private activeRoute:ActivatedRoute) { 
    this.id = this.activeRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    //this.activeRoute.params.subscribe((paramsData)=>{this.id=Number(paramsData)});
  }
  news_items=[
    {
      id:1,img:"assets/img/horizontal/horizontal_1.jpg",title:"Lifestyle",
      desc:`Lifestyle is the interests,opinions, behaviours, and behavioural orientations of an individual, 
      group, or culture. The term was introduced by Austrian psychologist Alfred Adler in his 1929 book, The 
      Case of Miss R., with the meaning of a person's basic character as established early in childhood". The 
      broader sense of lifestyle as a "way or style of living has been documented since 1961. 
      Lifestyle is a combination of determining intangible or tangible factors. Tangible factors relate 
      specifically to demographic variables, i.e. an individual's demographic profile, whereas intangible 
      factors concern the psychological aspects of an individual such as personal values, preferences, and 
      outlooks.`
    },
    {
      id:2,img:"assets/img/horizontal/horizontal_2.jpg",title:"Sports",desc:`Sport pertains to any form of competitive physical activity or game[1] that aims to use, maintain or improve physical ability and skills while providing enjoyment to participants and, in some cases, entertainment to spectators.[2] Sports can, through casual or organized participation, improve one's physical health. Hundreds of sports exist, from those between single contestants, through to those with hundreds of simultaneous participants, either in teams or competing as individuals. In certain sports such as racing, many contestants may compete, simultaneously or consecutively, with one winner; in others, the contest (a match) is between two sides, each attempting to exceed the other. Some sports allow a "tie" or "draw", in which there is no single winner; others provide tie-breaking methods to ensure one winner and one loser. A number of contests may be arranged in a tournament producing a champion. Many sports leagues make an annual champion by arranging games in a regular sports season, followed in some cases by playoffs.

      Sport is generally recognised as system of activities based in physical athleticism or physical dexterity, with major competitions such as the Olympic Games admitting only sports meeting this definition.[3] Other organisations, such as the Council of Europe, preclude activities without a physical element from classification as sports.`
    },
    {
      id:3,img:"assets/img/horizontal/horizontal_3.jpg",title:"Travel",desc:`Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip.[1] Travel can also include relatively short stays between successive movements, as in the case of tourism.The origin of the word "travel" is most likely lost to history. The term "travel" may originate from the Old French word travail, which means 'work'.[2] According to the Merriam Webster dictionary, the first known use of the word travel was in the 14th century. It also states that the word comes from Middle English travailen, travelen (which means to torment, labor, strive, journey) and earlier from Old French travailler (which means to work strenuously, toil).`
    }
  ]
}
