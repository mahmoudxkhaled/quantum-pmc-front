import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
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
  constructor(private title: Title) {
    this.title.setTitle('Home | Quantum PMC');
  }
  currentSlide = 0;
  private totalSlides = 3;

  // Projects slider properties
  currentProject = 0;
  projectTranslateX = 0;
  projects = [
    {
      id: 'samra',
      title: "Samra 400kV Grid Station",
      location: "Hashimya, Jordan",
      image: "assets/Images/samra/samra-main.jpg"
    },
    {
      id: 'king-faisal',
      title: "King Faisal Specialist Hospital and Research Center",
      location: "Jeddah, Saudi Arabia",
      image: "assets/Images/king-faisal/king-faisal-main.jpg"
    },
    {
      id: 'muscat-airport',
      title: "Development of Muscat International Airport Project",
      location: "Muscat, Oman",
      image: "assets/Images/muscat-airport/muscat-airport-layout-2.jpg"
    },
    {
      id: 'qatalum',
      title: "Qatar Aluminum Factory [Qatalum]",
      location: "Doha, Qatar",
      image: "assets/Images/qatalum/qatalum-external-full.jpg"
    },
    {
      id: 'haram-expansion',
      title: "Expansion of Haram (the Holy Mosque in Makkah)",
      location: "Makkah, Saudi Arabia",
      image: "assets/Images/haram-expansion/haram-expansion-progress.jpg"
    },
    {
      id: 'qatar-electrical-7',
      title: "The Expansion of Qatar Electrical Network [Phase 7]",
      location: "Doha, Qatar",
      image: "assets/Images/qatar-electrical-7/qatar-electrical-7-tx2.jpg"
    },
    {
      id: 'bahrain-bay',
      title: "Bahrain Bay Development Project – Infrastructure Works",
      location: "Manama, Bahrain",
      image: "assets/Images/bahrain-bay/bahrain-bay-master-plan-large.png"
    },
    {
      id: 'hamad-port',
      title: "Hamad Port Project, Doha, Qatar",
      location: "Doha, Qatar",
      image: "assets/Images/hamad-port/hamad-port-layout.jpg"
    },
    {
      id: 'qatar-electrical-6',
      title: "The Expansion of Qatar Electrical Network [Phase 6]",
      location: "Doha, Qatar",
      image: "assets/Images/qatar-electrical-6/qatar-electrical-6-gis.jpg"
    },
    {
      id: 'shams',
      title: "Shams Abu Dhabi Marina & Sea Wall Project",
      location: "Abu Dhabi, UAE",
      image: "assets/Images/shams/shams-project-890.png"
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

    // Auto-rotate slides every 9 seconds (slower)
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
      this.showSlide(this.currentSlide);
    }, 6000);

    // Auto-rotate projects every 12 seconds (slower)
    setInterval(() => {
      this.nextProject();
    }, 6000);
  }
}
