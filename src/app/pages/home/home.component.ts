import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  currentSlide = 0;
  private totalSlides = 3;

  showSlide(index: number) {
    this.currentSlide = index;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');

    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add('active');
        // Reset and restart animations for the active slide
        const textElements = slide.querySelectorAll('h2, p, .cta-button');
        textElements.forEach((element: any) => {
          element.style.animation = 'none';
          element.offsetHeight; // Trigger reflow
          element.style.animation = null;
        });
      } else {
        slide.classList.remove('active');
      }
    });

    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    this.showSlide(this.currentSlide);
  }

  previousSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
    this.showSlide(this.currentSlide);
  }

  ngOnInit() {
    // Auto-rotate slides every 5 seconds
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
      this.showSlide(this.currentSlide);
    }, 5000);
  }
}
