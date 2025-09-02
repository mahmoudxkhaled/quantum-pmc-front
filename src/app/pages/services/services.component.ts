import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="services-content">
      <h1>Our Services</h1>
      <p>Comprehensive project management and claims solutions</p>
      
      <div class="services-navigation">
        <div class="service-nav-card" routerLink="/services/project-management">
          <h3>Project Management Services</h3>
          <p>End-to-end project planning, execution, and delivery solutions</p>
          <div class="nav-arrow">→</div>
        </div>
        <div class="service-nav-card" routerLink="/services/claims-management">
          <h3>Claims Management Services</h3>
          <p>Expert claims handling, resolution, and dispute management</p>
          <div class="nav-arrow">→</div>
        </div>
      </div>
      
      <div class="services-overview">
        <h2>Service Overview</h2>
        <div class="overview-grid">
          <div class="overview-item">
            <h4>Project Management</h4>
            <p>Strategic planning, execution monitoring, and successful delivery</p>
          </div>
          <div class="overview-item">
            <h4>Claims Management</h4>
            <p>Comprehensive claims handling and dispute resolution</p>
          </div>
          <div class="overview-item">
            <h4>Risk Assessment</h4>
            <p>Comprehensive risk analysis and mitigation strategies</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .services-content {
      text-align: center;
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .services-navigation {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin: 3rem 0;
    }
    
    .service-nav-card {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      cursor: pointer;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      position: relative;
      border: 2px solid transparent;
    }
    
    .service-nav-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 25px rgba(0,0,0,0.15);
      border-color: #3498db;
    }
    
    .service-nav-card h3 {
      color: #2c3e50;
      margin-bottom: 1rem;
      font-size: 1.4rem;
    }
    
    .service-nav-card p {
      color: #34495e;
      line-height: 1.6;
      margin-bottom: 1rem;
    }
    
    .nav-arrow {
      position: absolute;
      right: 1.5rem;
      top: 50%;
      transform: translateY(-50%);
      font-size: 1.5rem;
      color: #3498db;
      font-weight: bold;
    }
    
    .services-overview {
      margin-top: 4rem;
      background: #f8f9fa;
      padding: 3rem;
      border-radius: 12px;
    }
    
    .services-overview h2 {
      color: #2c3e50;
      margin-bottom: 2rem;
      font-size: 2rem;
    }
    
    .overview-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }
    
    .overview-item {
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    
    .overview-item h4 {
      color: #3498db;
      margin-bottom: 1rem;
      font-size: 1.2rem;
    }
    
    .overview-item p {
      color: #34495e;
      line-height: 1.6;
    }
  `]
})
export class ServicesComponent { }
