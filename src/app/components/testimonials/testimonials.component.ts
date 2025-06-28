import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent implements AfterViewInit {

  reviewArr: any[] = [
    {
      title: "Professional and Friendly!",
      desc: "ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      image: "review-1.jpg",
      clientName: "Leslie Alexander",
      clientReview: "Satisfied Patient"

    },

    {
      title: "Highly Recommended!",
      desc: "ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      image: "review-2.jpg",
      clientName: "Bessie Lane",
      clientReview: "Satisfied Patient"

    },

    {
      title: "Totally Worth It!",
      desc: "ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      image: "review-3.jpg",
      clientName: "Sami Ben",
      clientReview: "Satisfied Patient"

    },
    {
      title: "Friendly Behavior!",
      desc: "ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      image: "review-4.jpg",
      clientName: "Teena Meena",
      clientReview: "Satisfied Patient"

    },
  ]


  ngAfterViewInit(): void {

    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      dots: true,
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
        1024: { items: 3 }
      }
    });

  }

}
