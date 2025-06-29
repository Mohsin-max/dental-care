import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-our-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-team.component.html',
  styleUrl: './our-team.component.css'
})
export class OurTeamComponent {

  cardDetails: any[] = [

    {
      image: "doctor1.jpg",
      docName: "Dr. Olivia Hayes",
      docProf: "Cosmetic Dentist"
    },
    {
      image: "doctor2.jpg",
      docName: "Dr. Emily Carter",
      docProf: "General Dentist"
    },
    {
      image: "doctor3.jpg",
      docName: "Dr. James Walker",
      docProf: "Orthodontist"
    }

  ]

}
