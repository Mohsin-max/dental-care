import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  showHideMenu:boolean = false

  toggleMenu(){

    this.showHideMenu = !this.showHideMenu
    

  }

}
