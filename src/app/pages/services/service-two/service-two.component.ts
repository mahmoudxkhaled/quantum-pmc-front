import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-service-two',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="service-two-content">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container">
          <h1 class="page-title">Claims Management Services</h1>
          <p class="hero-subtitle">Expert claims handling, resolution, and dispute management solutions for construction and infrastructure projects</p>
          <div class="hero-stats">
            <div class="stat">
              <span class="stat-number">1000+</span>
              <span class="stat-label">Claims Resolved</span>
            </div>
            <div class="stat">
              <span class="stat-number">$2B+</span>
              <span class="stat-label">Claims Value</span>
            </div>
            <div class="stat">
              <span class="stat-number">95%</span>
              <span class="stat-label">Success Rate</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Overview -->
      <section class="services-overview">
        <div class="container">
          <h2 class="section-title">Our Claims Management Services</h2>
          <div class="services-grid">
            <div class="service-card">
              <div class="service-icon">🔍</div>
              <h3>Claims Assessment & Analysis</h3>
              <p>Thorough evaluation and documentation of claims with comprehensive analysis and expert assessment</p>
              <ul class="service-features">
                <li>Claims investigation and fact-finding</li>
                <li>Documentation review and analysis</li>
                <li>Liability assessment and determination</li>
                <li>Damage evaluation and quantification</li>
                <li>Expert witness coordination</li>
                <li>Technical analysis and reports</li>
              </ul>
            </div>
            
            <div class="service-card">
              <div class="service-icon">⚖️</div>
              <h3>Claims Processing & Resolution</h3>
              <p>Efficient claims handling and settlement with professional negotiation and documentation</p>
              <ul class="service-features">
                <li>Claims filing and documentation</li>
                <li>Negotiation support and strategy</li>
                <li>Settlement facilitation and mediation</li>
                <li>Payment processing and tracking</li>
                <li>Claims monitoring and reporting</li>
                <li>Compliance and regulatory adherence</li>
              </ul>
            </div>
            
            <div class="service-card">
              <div class="service-icon">🤝</div>
              <h3>Dispute Resolution & Mediation</h3>
              <p>Professional conflict resolution services with alternative dispute resolution methods</p>
              <ul class="service-features">
                <li>Mediation services and facilitation</li>
                <li>Arbitration support and representation</li>
                <li>Expert testimony and reports</li>
                <li>Litigation support and preparation</li>
                <li>Alternative dispute resolution</li>
                <li>Conflict management strategies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Specialized Areas -->
      <section class="specialized-areas">
        <div class="container">
          <h2 class="section-title">Specialized Claims Management Areas</h2>
          <div class="areas-grid">
            <div class="area-card">
              <div class="area-icon">🏗️</div>
              <h3>Construction Claims</h3>
              <p>Delay, disruption, and defect claims in construction projects with expert analysis and resolution</p>
              <div class="area-features">
                <span class="feature-tag">Delay Claims</span>
                <span class="feature-tag">Disruption</span>
                <span class="feature-tag">Defects</span>
              </div>
            </div>
            
            <div class="area-card">
              <div class="area-icon">🛡️</div>
              <h3>Insurance Claims</h3>
              <p>Property, liability, and professional indemnity claims with comprehensive coverage analysis</p>
              <div class="area-features">
                <span class="feature-tag">Property</span>
                <span class="feature-tag">Liability</span>
                <span class="feature-tag">Indemnity</span>
              </div>
            </div>
            
            <div class="area-card">
              <div class="area-icon">📋</div>
              <h3>Contract Disputes</h3>
              <p>Breach of contract and performance issues with legal analysis and resolution strategies</p>
              <div class="area-features">
                <span class="feature-tag">Breach</span>
                <span class="feature-tag">Performance</span>
                <span class="feature-tag">Enforcement</span>
              </div>
            </div>
            
            <div class="area-card">
              <div class="area-icon">👨‍💼</div>
              <h3>Professional Negligence</h3>
              <p>Claims against professionals and consultants with expert analysis and defense strategies</p>
              <div class="area-features">
                <span class="feature-tag">Negligence</span>
                <span class="feature-tag">Professional</span>
                <span class="feature-tag">Defense</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Claims Process -->
      <section class="claims-process">
        <div class="container">
          <h2 class="section-title">Our Claims Management Process</h2>
          <div class="process-steps">
            <div class="process-step">
              <div class="step-number">1</div>
              <h3>Initial Assessment</h3>
              <p>Claims review, documentation analysis, and initial evaluation of merits and value</p>
            </div>
            
            <div class="process-step">
              <div class="step-number">2</div>
              <h3>Investigation</h3>
              <p>Comprehensive fact-finding, evidence collection, and expert analysis</p>
            </div>
            
            <div class="process-step">
              <div class="step-number">3</div>
              <h3>Analysis</h3>
              <p>Technical evaluation, liability assessment, and damage quantification</p>
            </div>
            
            <div class="process-step">
              <div class="step-number">4</div>
              <h3>Resolution</h3>
              <p>Negotiation, mediation, or formal dispute resolution proceedings</p>
            </div>
            
            <div class="process-step">
              <div class="step-number">5</div>
              <h3>Settlement</h3>
              <p>Final agreement, documentation, and implementation of settlement terms</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Choose Us -->
      <section class="why-choose">
        <div class="container">
          <h2 class="section-title">Why Choose Our Claims Management Services?</h2>
          <div class="benefits-grid">
            <div class="benefit-card">
              <div class="benefit-icon">🎓</div>
              <h3>Expert Knowledge</h3>
              <p>Specialized expertise in various claims types with deep understanding of construction and infrastructure industries</p>
              <ul class="benefit-list">
                <li>Industry-specific knowledge</li>
                <li>Technical expertise</li>
                <li>Legal understanding</li>
              </ul>
            </div>
            
            <div class="benefit-card">
              <div class="benefit-icon">📊</div>
              <h3>Proven Track Record</h3>
              <p>Successful resolution of complex claims with measurable results and client satisfaction</p>
              <ul class="benefit-list">
                <li>High success rate</li>
                <li>Complex case experience</li>
                <li>Client testimonials</li>
              </ul>
            </div>
            
            <div class="benefit-card">
              <div class="benefit-icon">💰</div>
              <h3>Cost Effective</h3>
              <p>Efficient processes and strategies to minimize costs while maximizing claim value</p>
              <ul class="benefit-list">
                <li>Efficient processes</li>
                <li>Cost optimization</li>
                <li>Value maximization</li>
              </ul>
            </div>
            
            <div class="benefit-card">
              <div class="benefit-icon">⚡</div>
              <h3>Fast Resolution</h3>
              <p>Quick turnaround times and efficient processes to resolve claims promptly</p>
              <ul class="benefit-list">
                <li>Quick response</li>
                <li>Efficient processes</li>
                <li>Timely resolution</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Case Studies -->
      <section class="case-studies">
        <div class="container">
          <h2 class="section-title">Success Stories</h2>
          <div class="cases-grid">
            <div class="case-card">
              <div class="case-icon">🏗️</div>
              <h3>Major Infrastructure Project</h3>
              <p class="case-description">Successfully resolved a $50M delay claim on a major highway construction project through expert analysis and strategic negotiation.</p>
              <div class="case-results">
                <span class="result-tag">$45M Settlement</span>
                <span class="result-tag">6 Months</span>
              </div>
            </div>
            
            <div class="case-card">
              <div class="case-icon">🏥</div>
              <h3>Hospital Construction Claim</h3>
              <p class="case-description">Resolved complex defect claims on a $200M hospital project through technical analysis and expert testimony.</p>
              <div class="case-results">
                <span class="result-tag">$15M Recovery</span>
                <span class="result-tag">4 Months</span>
              </div>
            </div>
            
            <div class="case-card">
              <div class="case-icon">✈️</div>
              <h3>Airport Development Dispute</h3>
              <p class="case-description">Successfully mediated a complex contract dispute on airport terminal construction, avoiding costly litigation.</p>
              <div class="case-results">
                <span class="result-tag">Mediated</span>
                <span class="result-tag">3 Months</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact CTA -->
      <section class="contact-cta">
        <div class="container">
          <h2>Need Expert Claims Management?</h2>
          <p>Let our specialized claims management team help you resolve your construction and infrastructure claims efficiently and effectively.</p>
          <div class="cta-buttons">
            <a routerLink="/contact" class="cta-button primary">Get in Touch</a>
            <a routerLink="/services" class="cta-button secondary">View All Services</a>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .service-two-content {
      min-height: 100vh;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    /* Hero Section */
    .hero-section {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 4rem 0;
      text-align: center;
    }

    .page-title {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 1rem;
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    .hero-subtitle {
      font-size: 1.3rem;
      opacity: 0.9;
      max-width: 800px;
      margin: 0 auto 3rem;
      line-height: 1.6;
    }

    .hero-stats {
      display: flex;
      justify-content: center;
      gap: 3rem;
      flex-wrap: wrap;
    }

    .stat {
      text-align: center;
    }

    .stat-number {
      display: block;
      font-size: 2.5rem;
      font-weight: 700;
      color: #f39c12;
    }

    .stat-label {
      font-size: 0.9rem;
      opacity: 0.8;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    /* Services Overview */
    .services-overview {
      background: #f8f9fa;
      padding: 4rem 0;
    }

    .section-title {
      text-align: center;
      font-size: 2.5rem;
      color: #2c3e50;
      margin-bottom: 3rem;
      font-weight: 600;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
    }

    .service-card {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      border-left: 4px solid #9b59b6;
      transition: transform 0.3s ease;
    }

    .service-card:hover {
      transform: translateY(-5px);
    }

    .service-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .service-card h3 {
      color: #2c3e50;
      margin-bottom: 1rem;
      font-size: 1.4rem;
      font-weight: 600;
    }

    .service-card p {
      color: #34495e;
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }

    .service-features {
      list-style: none;
      padding: 0;
    }

    .service-features li {
      padding: 0.5rem 0;
      color: #34495e;
      position: relative;
      padding-left: 1.5rem;
      line-height: 1.5;
    }

    .service-features li:before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #27ae60;
      font-weight: bold;
    }

    /* Specialized Areas */
    .specialized-areas {
      background: white;
      padding: 4rem 0;
    }

    .areas-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .area-card {
      background: #f8f9fa;
      padding: 2rem;
      border-radius: 12px;
      text-align: center;
      transition: transform 0.3s ease;
      border: 2px solid transparent;
    }

    .area-card:hover {
      transform: translateY(-5px);
      border-color: #9b59b6;
    }

    .area-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .area-card h3 {
      color: #2c3e50;
      margin-bottom: 1rem;
      font-size: 1.3rem;
      font-weight: 600;
    }

    .area-card p {
      color: #34495e;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .area-features {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      justify-content: center;
    }

    .feature-tag {
      background: #f0e6f7;
      color: #8e44ad;
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 500;
    }

    /* Claims Process */
    .claims-process {
      background: #f8f9fa;
      padding: 4rem 0;
    }

    .process-steps {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
    }

    .process-step {
      text-align: center;
      padding: 2rem;
    }

    .step-number {
      width: 60px;
      height: 60px;
      background: #9b59b6;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: 700;
      margin: 0 auto 1rem;
    }

    .process-step h3 {
      color: #2c3e50;
      margin-bottom: 1rem;
      font-size: 1.2rem;
      font-weight: 600;
    }

    .process-step p {
      color: #34495e;
      line-height: 1.6;
    }

    /* Why Choose Us */
    .why-choose {
      background: white;
      padding: 4rem 0;
    }

    .benefits-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .benefit-card {
      background: #f8f9fa;
      padding: 2rem;
      border-radius: 12px;
      text-align: center;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }

    .benefit-card:hover {
      transform: translateY(-5px);
    }

    .benefit-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .benefit-card h3 {
      color: #2c3e50;
      margin-bottom: 1rem;
      font-size: 1.3rem;
      font-weight: 600;
    }

    .benefit-card p {
      color: #34495e;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .benefit-list {
      list-style: none;
      padding: 0;
      text-align: left;
    }

    .benefit-list li {
      padding: 0.5rem 0;
      color: #34495e;
      position: relative;
      padding-left: 1.5rem;
    }

    .benefit-list li:before {
      content: "•";
      position: absolute;
      left: 0;
      color: #9b59b6;
      font-weight: bold;
    }

    /* Case Studies */
    .case-studies {
      background: #f8f9fa;
      padding: 4rem 0;
    }

    .cases-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .case-card {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      text-align: center;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }

    .case-card:hover {
      transform: translateY(-5px);
    }

    .case-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .case-card h3 {
      color: #2c3e50;
      margin-bottom: 1rem;
      font-size: 1.3rem;
      font-weight: 600;
    }

    .case-description {
      color: #34495e;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .case-results {
      display: flex;
      gap: 0.5rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .result-tag {
      background: #e8f5e8;
      color: #27ae60;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 600;
    }

    /* Contact CTA */
    .contact-cta {
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      color: white;
      padding: 4rem 0;
      text-align: center;
    }

    .contact-cta h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      font-weight: 600;
    }

    .contact-cta p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
      opacity: 0.9;
    }

    .cta-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .cta-button {
      padding: 1rem 2rem;
      text-decoration: none;
      border-radius: 5px;
      font-weight: 600;
      transition: all 0.3s ease;
      display: inline-block;
      font-size: 1.1rem;
    }

    .cta-button.primary {
      background: white;
      color: #2f39d3;
    }

    .cta-button.secondary {
      background: transparent;
      color: white;
      border: 2px solid white;
    }

    .cta-button:hover {
      transform: translateY(-2px);
    }

    .cta-button.primary:hover {
      background: #f8f9fa;
    }

    .cta-button.secondary:hover {
      background: white;
      color: #2f39d3;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .page-title {
        font-size: 2rem;
      }

      .section-title {
        font-size: 2rem;
      }

      .hero-stats {
        flex-direction: column;
        gap: 2rem;
      }

      .services-grid {
        grid-template-columns: 1fr;
      }

      .areas-grid {
        grid-template-columns: 1fr;
      }

      .benefits-grid {
        grid-template-columns: 1fr;
      }

      .process-steps {
        grid-template-columns: 1fr;
      }

      .cases-grid {
        grid-template-columns: 1fr;
      }

      .cta-buttons {
        flex-direction: column;
        align-items: center;
      }
    }
  `]
})
export class ServiceTwoComponent { }
