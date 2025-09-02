import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-service-one',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="service-one-content">
      <div class="hero-section">
        <h1>Project Management Services</h1>
        <p>Comprehensive project planning, execution, and delivery solutions</p>
      </div>
      
      <div class="services-overview">
        <div class="service-card">
          <h3>Project Planning & Strategy</h3>
          <p>Develop comprehensive project roadmaps and strategic planning frameworks</p>
          <ul>
            <li>Project scope definition</li>
            <li>Timeline development</li>
            <li>Resource allocation</li>
            <li>Risk assessment</li>
          </ul>
        </div>
        
        <div class="service-card">
          <h3>Project Execution & Monitoring</h3>
          <p>Ongoing project oversight and performance tracking</p>
          <ul>
            <li>Progress monitoring</li>
            <li>Quality assurance</li>
            <li>Stakeholder communication</li>
            <li>Issue resolution</li>
          </ul>
        </div>
        
        <div class="service-card">
          <h3>Project Delivery & Closure</h3>
          <p>Successful project completion and handover</p>
          <ul>
            <li>Final deliverables</li>
            <li>Documentation</li>
            <li>Lessons learned</li>
            <li>Project closure</li>
          </ul>
        </div>
      </div>
      
      <div class="why-choose">
        <h2>Why Choose Our Project Management Services?</h2>
        <div class="benefits-grid">
          <div class="benefit">
            <h4>Expert Team</h4>
            <p>Certified project managers with industry experience</p>
          </div>
          <div class="benefit">
            <h4>Proven Methodologies</h4>
            <p>Industry-standard frameworks and best practices</p>
          </div>
          <div class="benefit">
            <h4>Technology Integration</h4>
            <p>Modern tools and platforms for efficient management</p>
          </div>
        </div>
      </div>
    </div>
  `,
    styles: [`
    .service-one-content {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .hero-section {
      text-align: center;
      margin-bottom: 4rem;
      padding: 3rem 0;
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
      border-radius: 12px;
    }
    
    .hero-section h1 {
      font-size: 2.5rem;
      color: #2c3e50;
      margin-bottom: 1rem;
    }
    
    .hero-section p {
      font-size: 1.2rem;
      color: #34495e;
    }
    
    .services-overview {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;
    }
    
    .service-card {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      border-left: 4px solid #3498db;
    }
    
    .service-card h3 {
      color: #2c3e50;
      margin-bottom: 1rem;
      font-size: 1.3rem;
    }
    
    .service-card p {
      color: #34495e;
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }
    
    .service-card ul {
      list-style: none;
      padding: 0;
    }
    
    .service-card li {
      padding: 0.5rem 0;
      color: #34495e;
      position: relative;
      padding-left: 1.5rem;
    }
    
    .service-card li:before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #27ae60;
      font-weight: bold;
    }
    
    .why-choose {
      text-align: center;
      background: #f8f9fa;
      padding: 3rem;
      border-radius: 12px;
    }
    
    .why-choose h2 {
      color: #2c3e50;
      margin-bottom: 2rem;
      font-size: 2rem;
    }
    
    .benefits-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }
    
    .benefit {
      padding: 1.5rem;
    }
    
    .benefit h4 {
      color: #3498db;
      margin-bottom: 1rem;
      font-size: 1.2rem;
    }
    
    .benefit p {
      color: #34495e;
      line-height: 1.6;
    }
  `]
})
export class ServiceOneComponent { }
