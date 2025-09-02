import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="home-content">
      <h1>Welcome to Quantum PMC</h1>
      <p>Your trusted partner in project management and claims services</p>
      <div class="features">
        <div class="feature">
          <h3>Project Management</h3>
          <p>Expert project planning, execution, and monitoring</p>
        </div>
        <div class="feature">
          <h3>Claims Services</h3>
          <p>Professional claims handling and dispute resolution</p>
        </div>
        <div class="feature">
          <h3>Consulting</h3>
          <p>Strategic advice for complex projects</p>
        </div>
      </div>
    </div>
  `,
    styles: [`
    .home-content {
      text-align: center;
      padding: 2rem;
    }
    
    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-top: 3rem;
    }
    
    .feature {
      padding: 1.5rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
  `]
})
export class HomeComponent { }
