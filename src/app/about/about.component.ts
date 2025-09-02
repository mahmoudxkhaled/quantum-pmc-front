import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="about-content">
      <h1>About Quantum PMC</h1>
      <p>Leading provider of project management and claims services</p>
      <div class="about-details">
        <p>We specialize in delivering exceptional project management solutions and expert claims handling for complex construction and engineering projects.</p>
      </div>
    </div>
  `,
    styles: [`
    .about-content {
      text-align: center;
      padding: 2rem;
    }
    
    .about-details {
      max-width: 800px;
      margin: 2rem auto;
      text-align: left;
    }
  `]
})
export class AboutComponent { }
