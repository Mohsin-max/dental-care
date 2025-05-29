import { Component } from '@angular/core';
import { ButtonComponent } from "../../shared/button/button.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [ButtonComponent,CommonModule,RouterModule],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.css'
})
export class OurServicesComponent {

  serviceCardDetails: any[] = [

    {
      image: 'service1.jpg',
      icon: 'service4.png',
      heading: 'General Dentistry',
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod tempor incididunt ut labore...",

    },

    {
      image: 'service2.jpg',
      icon: 'service5.png',
      heading: 'Dental Implant',
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod tempor incididunt ut labore...",

    },

    {
      image: 'service3.jpg',
      icon: 'service6.png',
      heading: 'Teeth Whitening',
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod tempor incididunt ut labore...",

    },

  ]

}
