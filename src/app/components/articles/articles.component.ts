import { Component } from '@angular/core';
import { ButtonComponent } from "../../shared/button/button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent {

  cardDetails: any[] = [

    {
      image: "blog1.jpg",
      tag: "Dental Care Tips",
      date: "Dec 15, 2024",
      title: "Essential Practices for a Healthy, Beautiful Smile",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod tempor"
    },
    {
      image: "blog2.jpg",
      tag: "Teeth Whitening",
      date: "Dec 14, 2024",
      title: "Everything You Need to Know About Teeth Whiteni...",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod tempor"
    },
    {
      image: "blog3.jpg",
      tag: "Dental Implant",
      date: "Dec 13, 2024",
      title: "Everything You Need to Know About Dental Implants",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod tempor"
    }

  ]

}
