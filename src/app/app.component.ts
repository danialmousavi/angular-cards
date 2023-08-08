import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts=[{
    title:'tree',
    imageUrl:'assets/images/tree.jpg',
    username:'tree',
    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo mollitia aut possimus adipisci corrupti quam pariatur magnam est repellat libero, deleniti, sequi necessitatibus ullam voluptatibus veritatis dolore hic? Corporis, mollitia.'
  },
  {
    title:'mountain',
    imageUrl:'assets/images/mountain.jpg',
    username:'mountain',
    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo mollitia aut possimus adipisci corrupti quam pariatur magnam est repellat libero, deleniti, sequi necessitatibus ullam voluptatibus veritatis dolore hic? Corporis, mollitia.'
  },
  {
    title:'bike',
    imageUrl:'assets/images/bike.jpg',
    username:'bike',
    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo mollitia aut possimus adipisci corrupti quam pariatur magnam est repellat libero, deleniti, sequi necessitatibus ullam voluptatibus veritatis dolore hic? Corporis, mollitia.'
  },
  
]
}
