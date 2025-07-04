import { Component } from '@angular/core';
import { ButtonComponent } from "../../shared/button/button.component";

@Component({
  selector: 'app-news-letter',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './news-letter.component.html',
  styleUrl: './news-letter.component.css'
})
export class NewsLetterComponent {

}
