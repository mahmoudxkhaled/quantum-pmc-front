import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="about-content">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container">
          <h1 class="page-title">About Quantum PMC</h1>
          <p class="hero-subtitle">Leading provider of project management and claims services in the Middle East</p>
        </div>
      </section>

      <!-- Company Overview -->
      <section class="company-overview">
        <div class="container">
          <div class="overview-grid">
            <div class="overview-card">
              <h2>Our Company</h2>
              <p>Quantum Project Management & Claims Services (QPMC) is a specialized consulting firm with over 20 years of experience in the construction industry across the Middle East region. We have developed a deep understanding of the region's unique challenges and requirements in complex construction projects.</p>
            </div>
            
            <div class="overview-card">
              <h2>Our Mission</h2>
              <p>To provide exceptional project management solutions and expert claims handling services that ensure successful project delivery while protecting our clients' interests and maximizing their project value.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Core Services -->
      <section class="core-services">
        <div class="container">
          <h2 class="section-title">Our Core Services</h2>
          <div class="services-grid">
            <div class="service-card">
              <div class="service-icon">📊</div>
              <h3>Project Controls & Management</h3>
              <p>Comprehensive project planning, scheduling, cost control, and execution monitoring services tailored to complex construction projects.</p>
            </div>
            
            <div class="service-card">
              <div class="service-icon">⚖️</div>
              <h3>Claims & Disputes Resolution</h3>
              <p>Expert claims assessment, documentation, negotiation support, and dispute resolution through mediation, arbitration, or litigation support.</p>
            </div>
            
            <div class="service-card">
              <div class="service-icon">📋</div>
              <h3>Contract Administration</h3>
              <p>Strategic contract management, risk assessment, change management, and compliance monitoring throughout project lifecycle.</p>
            </div>
            
            <div class="service-card">
              <div class="service-icon">🔍</div>
              <h3>Expert Witness Services</h3>
              <p>Professional expert testimony, technical analysis, and independent assessments for construction disputes and legal proceedings.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Choose Us -->
      <section class="why-choose-us">
        <div class="container">
          <h2 class="section-title">Why Choose QPMC</h2>
          <div class="benefits-grid">
            <div class="benefit-item">
              <h3>🎯 Specialized Expertise</h3>
              <p>Focused exclusively on construction project management and claims resolution with deep industry knowledge.</p>
            </div>
            
            <div class="benefit-item">
              <h3>🌍 Regional Experience</h3>
              <p>Over two decades of experience working across the Middle East, understanding local regulations, practices, and cultural nuances.</p>
            </div>
            
            <div class="benefit-item">
              <h3>⚡ Flexible Service Models</h3>
              <p>From day-to-day support to full project responsibility, we adapt our services to meet your specific needs and budget.</p>
            </div>
            
            <div class="benefit-item">
              <h3>💼 Proven Track Record</h3>
              <p>Successfully managed and resolved complex projects and disputes across various sectors including infrastructure, healthcare, and industrial projects.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Client Types -->
      <section class="client-types">
        <div class="container">
          <h2 class="section-title">Who We Serve</h2>
          <div class="clients-grid">
            <div class="client-category">
              <h3>🏛️ Governmental Entities</h3>
              <p>Ministries, municipalities, and government agencies seeking professional project management and claims resolution services for public infrastructure projects.</p>
            </div>
            
            <div class="client-category">
              <h3>🏗️ Developers & Project Owners</h3>
              <p>Real estate developers and project owners requiring expert oversight and dispute resolution for large-scale construction developments.</p>
            </div>
            
            <div class="client-category">
              <h3>👷 Contractors</h3>
              <p>Construction contractors needing support with claims development, contract management, and dispute resolution strategies.</p>
            </div>
            
            <div class="client-category">
              <h3>📋 Consultants</h3>
              <p>Engineering and architectural consultants seeking project controls expertise and change management strategies.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Experience Highlights -->
      <section class="experience-highlights">
        <div class="container">
          <h2 class="section-title">Our Experience Highlights</h2>
          <div class="highlights-grid">
            <div class="highlight-item">
              <div class="highlight-number">20+</div>
              <h3>Years of Experience</h3>
              <p>Two decades of specialized expertise in Middle East construction industry</p>
            </div>
            
            <div class="highlight-item">
              <div class="highlight-number">100+</div>
              <h3>Projects Managed</h3>
              <p>Successfully delivered projects across various sectors and scales</p>
            </div>
            
            <div class="highlight-item">
              <div class="highlight-number">50+</div>
              <h3>Claims Resolved</h3>
              <p>Expertly handled complex construction disputes and claims</p>
            </div>
            
            <div class="highlight-item">
              <div class="highlight-number">15+</div>
              <h3>Countries Served</h3>
              <p>Regional presence across the Middle East and beyond</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact CTA -->
      <section class="contact-cta">
        <div class="container">
          <h2>Ready to Work with QPMC?</h2>
          <p>Let us help you achieve successful project delivery and resolve any construction challenges you may face.</p>
          <a href="/contact" class="cta-button">Get in Touch</a>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .about-content {
      min-height: 100vh;
    }

    /* Hero Section */
    .hero-section {
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      color: white;
      padding: 4rem 0;
      text-align: center;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
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
      max-width: 600px;
      margin: 0 auto;
    }

    /* Company Overview */
    .company-overview {
      background: #f8f9fa;
      padding: 4rem 0;
    }

    .overview-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
      gap: 3rem;
    }

    .overview-card {
      background: white;
      padding: 2.5rem;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }

    .overview-card h2 {
      color: #2f39d3;
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
      font-weight: 600;
    }

    .overview-card p {
      color: #34495e;
      line-height: 1.7;
      font-size: 1.1rem;
    }

    /* Core Services */
    .core-services {
      background: white;
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
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }

    .service-card {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      text-align: center;
      transition: transform 0.3s ease;
      border: 2px solid transparent;
    }

    .service-card:hover {
      transform: translateY(-5px);
      border-color: #2f39d3;
    }

    .service-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .service-card h3 {
      color: #2c3e50;
      font-size: 1.3rem;
      margin-bottom: 1rem;
      font-weight: 600;
    }

    .service-card p {
      color: #34495e;
      line-height: 1.6;
    }

    /* Why Choose Us */
    .why-choose-us {
      background: #f8f9fa;
      padding: 4rem 0;
    }

    .benefits-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .benefit-item {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }

    .benefit-item h3 {
      color: #2f39d3;
      font-size: 1.2rem;
      margin-bottom: 1rem;
      font-weight: 600;
    }

    .benefit-item p {
      color: #34495e;
      line-height: 1.6;
    }

    /* Client Types */
    .client-types {
      background: white;
      padding: 4rem 0;
    }

    .clients-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .client-category {
      background: #f8f9fa;
      padding: 2rem;
      border-radius: 12px;
      border-left: 4px solid #2f39d3;
    }

    .client-category h3 {
      color: #2c3e50;
      font-size: 1.3rem;
      margin-bottom: 1rem;
      font-weight: 600;
    }

    .client-category p {
      color: #34495e;
      line-height: 1.6;
    }

    /* Experience Highlights */
    .experience-highlights {
      background: linear-gradient(135deg, #2f39d3 0%, #1a1a2e 100%);
      color: white;
      padding: 4rem 0;
    }

    .highlights-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .highlight-item {
      text-align: center;
      padding: 2rem;
    }

    .highlight-number {
      font-size: 3rem;
      font-weight: 700;
      color: #4da6ff;
      margin-bottom: 1rem;
    }

    .highlight-item h3 {
      font-size: 1.3rem;
      margin-bottom: 1rem;
      font-weight: 600;
    }

    .highlight-item p {
      opacity: 0.9;
      line-height: 1.6;
    }

    /* Contact CTA */
    .contact-cta {
      background: #f8f9fa;
      padding: 4rem 0;
      text-align: center;
    }

    .contact-cta h2 {
      color: #2c3e50;
      font-size: 2.5rem;
      margin-bottom: 1rem;
      font-weight: 600;
    }

    .contact-cta p {
      color: #34495e;
      font-size: 1.2rem;
      margin-bottom: 2rem;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .cta-button {
      background: #2f39d3;
      color: white;
      padding: 1rem 2rem;
      text-decoration: none;
      border-radius: 5px;
      font-weight: 600;
      transition: all 0.3s ease;
      display: inline-block;
      font-size: 1.1rem;
    }

    .cta-button:hover {
      background: #0c0f26;
      transform: translateY(-2px);
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .page-title {
        font-size: 2rem;
      }

      .section-title {
        font-size: 2rem;
      }

      .overview-grid {
        grid-template-columns: 1fr;
      }

      .services-grid {
        grid-template-columns: 1fr;
      }

      .benefits-grid {
        grid-template-columns: 1fr;
      }

      .clients-grid {
        grid-template-columns: 1fr;
      }

      .highlights-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `]
})
export class AboutComponent { }
