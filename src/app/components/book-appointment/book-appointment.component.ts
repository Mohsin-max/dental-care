import { Component } from '@angular/core';
import { ButtonComponent } from "../../shared/button/button.component";

@Component({
  selector: 'app-book-appointment',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './book-appointment.component.html',
  styleUrl: './book-appointment.component.css'
})
export class BookAppointmentComponent {

}
