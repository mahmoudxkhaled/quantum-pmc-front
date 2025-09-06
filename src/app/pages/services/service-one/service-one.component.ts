import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-service-one',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="service-one-content">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container">
          <h1 class="page-title">Project Management Services</h1>
          <p class="hero-subtitle">Comprehensive project planning, execution, and delivery solutions for complex infrastructure and construction projects</p>
          <div class="hero-stats">
            <div class="stat">
              <span class="stat-number">500+</span>
              <span class="stat-label">Projects Delivered</span>
            </div>
            <div class="stat">
              <span class="stat-number">25+</span>
              <span class="stat-label">Years Experience</span>
            </div>
            <div class="stat">
              <span class="stat-number">98%</span>
              <span class="stat-label">Success Rate</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Overview -->
      <section class="services-overview">
        <div class="container">
          <h2 class="section-title">Our Project Management Services</h2>
          <div class="services-grid">
            <div class="service-card">
              <div class="service-icon">📋</div>
              <h3>Project Planning & Strategy</h3>
              <p>Develop comprehensive project roadmaps and strategic planning frameworks that ensure successful project delivery</p>
              <ul class="service-features">
                <li>Project scope definition and documentation</li>
                <li>Timeline development and milestone planning</li>
                <li>Resource allocation and team management</li>
                <li>Risk assessment and mitigation strategies</li>
                <li>Budget planning and cost control</li>
                <li>Stakeholder identification and communication plans</li>
              </ul>
            </div>
            
            <div class="service-card">
              <div class="service-icon">⚡</div>
              <h3>Project Execution & Monitoring</h3>
              <p>Ongoing project oversight and performance tracking to ensure projects stay on track and within budget</p>
              <ul class="service-features">
                <li>Progress monitoring and reporting</li>
                <li>Quality assurance and control</li>
                <li>Stakeholder communication management</li>
                <li>Issue identification and resolution</li>
                <li>Change management and scope control</li>
                <li>Performance metrics and KPI tracking</li>
              </ul>
            </div>
            
            <div class="service-card">
              <div class="service-icon">🎯</div>
              <h3>Project Delivery & Closure</h3>
              <p>Successful project completion and handover with comprehensive documentation and lessons learned</p>
              <ul class="service-features">
                <li>Final deliverables and acceptance</li>
                <li>Project documentation and handover</li>
                <li>Lessons learned and best practices</li>
                <li>Project closure and post-project review</li>
                <li>Team recognition and celebration</li>
                <li>Knowledge transfer and training</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Specialized Areas -->
      <section class="specialized-areas">
        <div class="container">
          <h2 class="section-title">Specialized Project Management Areas</h2>
          <div class="areas-grid">
            <div class="area-card">
              <div class="area-icon">🏗️</div>
              <h3>Construction & Infrastructure</h3>
              <p>Large-scale construction projects, roads, bridges, and public infrastructure development</p>
              <div class="area-features">
                <span class="feature-tag">Civil Engineering</span>
                <span class="feature-tag">Infrastructure</span>
                <span class="feature-tag">Construction</span>
              </div>
            </div>
            
            <div class="area-card">
              <div class="area-icon">🏭</div>
              <h3>Industrial & Manufacturing</h3>
              <p>Industrial facilities, manufacturing plants, and production line optimization projects</p>
              <div class="area-features">
                <span class="feature-tag">Industrial</span>
                <span class="feature-tag">Manufacturing</span>
                <span class="feature-tag">Production</span>
              </div>
            </div>
            
            <div class="area-card">
              <div class="area-icon">🏥</div>
              <h3>Healthcare & Medical</h3>
              <p>Hospital construction, medical facility development, and healthcare infrastructure projects</p>
              <div class="area-features">
                <span class="feature-tag">Healthcare</span>
                <span class="feature-tag">Medical</span>
                <span class="feature-tag">Hospital</span>
              </div>
            </div>
            
            <div class="area-card">
              <div class="area-icon">✈️</div>
              <h3>Aviation & Transportation</h3>
              <p>Airport development, transportation infrastructure, and logistics facility projects</p>
              <div class="area-features">
                <span class="feature-tag">Aviation</span>
                <span class="feature-tag">Transportation</span>
                <span class="feature-tag">Logistics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Choose Us -->
      <section class="why-choose">
        <div class="container">
          <h2 class="section-title">Why Choose Our Project Management Services?</h2>
          <div class="benefits-grid">
            <div class="benefit-card">
              <div class="benefit-icon">👥</div>
              <h3>Expert Team</h3>
              <p>Certified project managers with extensive industry experience in construction, infrastructure, and complex project delivery</p>
              <ul class="benefit-list">
                <li>PMP certified professionals</li>
                <li>Industry-specific expertise</li>
                <li>Proven track record</li>
              </ul>
            </div>
            
            <div class="benefit-card">
              <div class="benefit-icon">📚</div>
              <h3>Proven Methodologies</h3>
              <p>Industry-standard frameworks and best practices including PMBOK, PRINCE2, and Agile methodologies</p>
              <ul class="benefit-list">
                <li>PMBOK methodology</li>
                <li>PRINCE2 framework</li>
                <li>Agile & Scrum practices</li>
              </ul>
            </div>
            
            <div class="benefit-card">
              <div class="benefit-icon">💻</div>
              <h3>Technology Integration</h3>
              <p>Modern project management tools and platforms for efficient planning, tracking, and communication</p>
              <ul class="benefit-list">
                <li>Project management software</li>
                <li>Real-time collaboration tools</li>
                <li>Advanced reporting systems</li>
              </ul>
            </div>
            
            <div class="benefit-card">
              <div class="benefit-icon">🌍</div>
              <h3>Global Experience</h3>
              <p>International project experience across multiple countries and diverse cultural environments</p>
              <ul class="benefit-list">
                <li>Multi-cultural teams</li>
                <li>International standards</li>
                <li>Local compliance knowledge</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Process Overview -->
      <section class="process-overview">
        <div class="container">
          <h2 class="section-title">Our Project Management Process</h2>
          <div class="process-steps">
            <div class="process-step">
              <div class="step-number">1</div>
              <h3>Initiation</h3>
              <p>Project charter development, stakeholder identification, and initial planning</p>
            </div>
            
            <div class="process-step">
              <div class="step-number">2</div>
              <h3>Planning</h3>
              <p>Detailed project planning, resource allocation, and risk assessment</p>
            </div>
            
            <div class="process-step">
              <div class="step-number">3</div>
              <h3>Execution</h3>
              <p>Project implementation, team coordination, and progress monitoring</p>
            </div>
            
            <div class="process-step">
              <div class="step-number">4</div>
              <h3>Monitoring</h3>
              <p>Performance tracking, quality control, and issue resolution</p>
            </div>
            
            <div class="process-step">
              <div class="step-number">5</div>
              <h3>Closure</h3>
              <p>Project completion, documentation, and lessons learned</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact CTA -->
      <section class="contact-cta">
        <div class="container">
          <h2>Ready to Start Your Project?</h2>
          <p>Let our expert project management team help you deliver your next project successfully with our proven expertise and comprehensive services.</p>
          <div class="cta-buttons">
            <a routerLink="/contact" class="cta-button primary">Get in Touch</a>
            <a routerLink="/projects" class="cta-button secondary">View Our Projects</a>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .service-one-content {
      min-height: 100vh;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    /* Hero Section */
    .hero-section {
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
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
      color: #3498db;
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
      border-left: 4px solid #3498db;
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
      border-color: #3498db;
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
      background: #e8f4fd;
      color: #2f39d3;
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 500;
    }

    /* Why Choose Us */
    .why-choose {
      background: #f8f9fa;
      padding: 4rem 0;
    }

    .benefits-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .benefit-card {
      background: white;
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
      color: #3498db;
      font-weight: bold;
    }

    /* Process Overview */
    .process-overview {
      background: white;
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
      background: #3498db;
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

    /* Contact CTA */
    .contact-cta {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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

      .cta-buttons {
        flex-direction: column;
        align-items: center;
      }
    }
  `]
})
export class ServiceOneComponent { }
