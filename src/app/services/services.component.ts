import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-services',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="services-content">
      <h1>Our Services</h1>
      <p>Comprehensive project management and claims solutions</p>
      <div class="services-grid">
        <div class="service">
          <h3>Project Management</h3>
          <p>End-to-end project planning and execution</p>
        </div>
        <div class="service">
          <h3>Claims Management</h3>
          <p>Expert claims handling and resolution</p>
        </div>
        <div class="service">
          <h3>Risk Assessment</h3>
          <p>Comprehensive risk analysis and mitigation</p>
        </div>
      </div>
    </div>
  `,
    styles: [`
    .services-content {
      text-align: center;
      padding: 2rem;
    }
    
    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-top: 3rem;
    }
    
    .service {
      padding: 1.5rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
  `]
})
export class ServicesComponent { }
