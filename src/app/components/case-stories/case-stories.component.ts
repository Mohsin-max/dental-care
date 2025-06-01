import { Component } from '@angular/core';
import { ButtonComponent } from "../../shared/button/button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-case-stories',
  standalone: true,
  imports: [ButtonComponent,CommonModule],
  templateUrl: './case-stories.component.html',
  styleUrl: './case-stories.component.css'
})
export class CaseStoriesComponent {

  cardsDetails:any[]=[

    {
      image:"story1.jpg",
      heading:"A Brighter Tomorrow: Sarah's Whitening Journey",
      tag1:"2024",
      tag2:"Teeth Whitening",
      tag3:"Dental Care",
    },

    {
      image:"story2.jpg",
      heading:"A Beautiful Transformation: Olivia's Braces Journey",
      tag1:"2024",
      tag2:"Braces Treatment",
      tag3:"Dental Care",
    }

  ]

}
