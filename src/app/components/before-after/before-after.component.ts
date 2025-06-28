import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ButtonComponent } from "../../shared/button/button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-before-after',
  standalone: true,
  imports: [ButtonComponent,CommonModule],
  templateUrl: './before-after.component.html',
  styleUrl: './before-after.component.css'
})
export class BeforeAfterComponent {


}
