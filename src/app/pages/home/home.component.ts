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

  // Projects slider properties
  currentProject = 0;
  projectTranslateX = 0;
  projects = [
    {
      title: "Samra 400kV Grid Station",
      location: "Jordan",
      image: "assets/Images/overall-layout.jpg"
    },
    {
      title: "King Faisal Specialist Hospital and Research Center",
      location: "Riyadh, Saudi Arabia",
      image: "assets/Images/image-1.jpg"
    },
    {
      title: "Development of Muscat International Airport Project",
      location: "Oman",
      image: "assets/Images/Layout-Copy-1.jpg"
    },
    {
      title: "Qatar Aluminum Factory [Qatalum]",
      location: "Qatar",
      image: "assets/Images/external-photo.jpg"
    },
    {
      title: "Expansion of Haram (the Holy Mosque in Makkah)",
      location: "Makkah, Saudi Arabia",
      image: "assets/Images/Haram-HL-Photo-In-Progress-1024x519.jpg"
    },
    {
      title: "The Expansion of Qatar Electrical Network [Phase 7]",
      location: "Qatar",
      image: "assets/Images/P7-TX2.jpg"
    },
    {
      title: "Bahrain Bay Development Project – Infrastructure Works",
      location: "Bahrain",
      image: "assets/Images/Master-Plan-1024x406.png"
    },
    {
      title: "Hamad Port Project, Doha, Qatar",
      location: "Doha, Qatar",
      image: "assets/Images/small-layout.jpg"
    },
    {
      title: "The Expansion of Qatar Electrical Network [Phase 6]",
      location: "Qatar",
      image: "assets/Images/P6-GIS-1024x768.jpg"
    },
    {
      title: "Shams Abu Dhabi Marina & Sea Wall Project",
      location: "Abu Dhabi, UAE",
      image: "assets/Images/Shams-Project-890x664.png"
    }
  ];

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

  // Projects slider methods
  nextProject() {
    this.currentProject = (this.currentProject + 1) % this.projects.length;
    this.updateProjectSlides();
  }

  previousProject() {
    this.currentProject = (this.currentProject - 1 + this.projects.length) % this.projects.length;
    this.updateProjectSlides();
  }

  goToProject(index: number) {
    this.currentProject = index;
    this.updateProjectSlides();
  }

  private updateProjectSlides() {
    const slides = document.querySelectorAll('.project-slide');
    const dots = document.querySelectorAll('.project-slider-dot');

    slides.forEach((slide, i) => {
      if (i === this.currentProject) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    dots.forEach((dot, i) => {
      if (i === this.currentProject) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  ngOnInit() {
    // Initialize project slides
    this.updateProjectSlides();

    // Auto-rotate slides every 5 seconds
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
      this.showSlide(this.currentSlide);
    }, 5000);

    // Auto-rotate projects every 8 seconds
    setInterval(() => {
      this.nextProject();
    }, 8000);
  }
}
