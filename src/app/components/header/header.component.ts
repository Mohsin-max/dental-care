import { Component, HostListener } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  showHideMenu: boolean = false

  toggleMenu() {

    this.showHideMenu = !this.showHideMenu

  }

  hideNavbar = false;
  private lastScrollTop = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > this.lastScrollTop && currentScroll > 300) {
      // Scroll down → hide navbar
      this.hideNavbar = true;
    } else {
      // Scroll up → show navbar
      this.hideNavbar = false;
    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

}
