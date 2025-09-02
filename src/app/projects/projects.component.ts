import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="projects-content">
      <h1>Our Projects</h1>
      <p>Successfully delivered projects across various industries</p>
      <div class="projects-grid">
        <div class="project">
          <h3>Infrastructure Development</h3>
          <p>Large-scale infrastructure projects</p>
        </div>
        <div class="project">
          <h3>Commercial Construction</h3>
          <p>Office buildings and commercial spaces</p>
        </div>
        <div class="project">
          <h3>Industrial Projects</h3>
          <p>Manufacturing and industrial facilities</p>
        </div>
      </div>
    </div>
  `,
    styles: [`
    .projects-content {
      text-align: center;
      padding: 2rem;
    }
    
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-top: 3rem;
    }
    
    .project {
      padding: 1.5rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
  `]
})
export class ProjectsComponent { }
