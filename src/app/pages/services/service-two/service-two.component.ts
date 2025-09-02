import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-service-two',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="service-two-content">
      <div class="hero-section">
        <h1>Claims Management Services</h1>
        <p>Expert claims handling, resolution, and dispute management solutions</p>
      </div>
      
      <div class="services-overview">
        <div class="service-card">
          <h3>Claims Assessment & Analysis</h3>
          <p>Thorough evaluation and documentation of claims</p>
          <ul>
            <li>Claims investigation</li>
            <li>Documentation review</li>
            <li>Liability assessment</li>
            <li>Damage evaluation</li>
          </ul>
        </div>
        
        <div class="service-card">
          <h3>Claims Processing & Resolution</h3>
          <p>Efficient claims handling and settlement</p>
          <ul>
            <li>Claims filing</li>
            <li>Negotiation support</li>
            <li>Settlement facilitation</li>
            <li>Payment processing</li>
          </ul>
        </div>
        
        <div class="service-card">
          <h3>Dispute Resolution & Mediation</h3>
          <p>Professional conflict resolution services</p>
          <ul>
            <li>Mediation services</li>
            <li>Arbitration support</li>
            <li>Expert testimony</li>
            <li>Litigation support</li>
          </ul>
        </div>
      </div>
      
      <div class="specialized-areas">
        <h2>Specialized Claims Areas</h2>
        <div class="areas-grid">
          <div class="area">
            <h4>Construction Claims</h4>
            <p>Delay, disruption, and defect claims in construction projects</p>
          </div>
          <div class="area">
            <h4>Insurance Claims</h4>
            <p>Property, liability, and professional indemnity claims</p>
          </div>
          <div class="area">
            <h4>Contract Disputes</h4>
            <p>Breach of contract and performance issues</p>
          </div>
          <div class="area">
            <h4>Professional Negligence</h4>
            <p>Claims against professionals and consultants</p>
          </div>
        </div>
      </div>
      
      <div class="why-choose">
        <h2>Why Choose Our Claims Management Services?</h2>
        <div class="benefits-grid">
          <div class="benefit">
            <h4>Expert Knowledge</h4>
            <p>Specialized expertise in various claims types</p>
          </div>
          <div class="benefit">
            <h4>Proven Track Record</h4>
            <p>Successful resolution of complex claims</p>
          </div>
          <div class="benefit">
            <h4>Cost Effective</h4>
            <p>Efficient processes to minimize costs</p>
          </div>
        </div>
      </div>
    </div>
  `,
    styles: [`
    .service-two-content {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .hero-section {
      text-align: center;
      margin-bottom: 4rem;
      padding: 3rem 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 12px;
      color: white;
    }
    
    .hero-section h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    
    .hero-section p {
      font-size: 1.2rem;
      opacity: 0.9;
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
      border-left: 4px solid #9b59b6;
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
    
    .specialized-areas {
      background: #f8f9fa;
      padding: 3rem;
      border-radius: 12px;
      margin-bottom: 4rem;
    }
    
    .specialized-areas h2 {
      text-align: center;
      color: #2c3e50;
      margin-bottom: 2rem;
      font-size: 2rem;
    }
    
    .areas-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }
    
    .area {
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      text-align: center;
    }
    
    .area h4 {
      color: #9b59b6;
      margin-bottom: 1rem;
      font-size: 1.2rem;
    }
    
    .area p {
      color: #34495e;
      line-height: 1.6;
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
      color: #9b59b6;
      margin-bottom: 1rem;
      font-size: 1.2rem;
    }
    
    .benefit p {
      color: #34495e;
      line-height: 1.6;
    }
  `]
})
export class ServiceTwoComponent { }
