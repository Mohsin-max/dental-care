import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from "./components/hero/hero.component";
import { AboutComponent } from "./components/about/about.component";
import { ScrollingTextComponent } from "./components/scrolling-text/scrolling-text.component";
import { OurServicesComponent } from "./components/our-services/our-services.component";
import { WhyUsComponent } from "./components/why-us/why-us.component";
import { CaseStoriesComponent } from "./components/case-stories/case-stories.component";
import { HowItWorksComponent } from "./components/how-it-works/how-it-works.component";
import { BookAppointmentComponent } from "./components/book-appointment/book-appointment.component";
import { WatchVideoComponent } from "./components/watch-video/watch-video.component";
import { TestimonialsComponent } from "./components/testimonials/testimonials.component";
import { BeforeAfterComponent } from "./components/before-after/before-after.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopHeaderComponent, HeaderComponent, HeroComponent, AboutComponent, ScrollingTextComponent, OurServicesComponent, WhyUsComponent, CaseStoriesComponent, HowItWorksComponent, BookAppointmentComponent, WatchVideoComponent, TestimonialsComponent, BeforeAfterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DentalCare';
}
