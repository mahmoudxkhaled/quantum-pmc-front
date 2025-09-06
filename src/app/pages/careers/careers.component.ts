import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="careers-content">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container">
          <h1 class="page-title">Join Our Team</h1>
          <p class="hero-subtitle">Build your career with Quantum PMC and be part of delivering world-class infrastructure and construction projects</p>
          <div class="hero-stats">
            <div class="stat">
              <span class="stat-number">150+</span>
              <span class="stat-label">Team Members</span>
            </div>
            <div class="stat">
              <span class="stat-number">25+</span>
              <span class="stat-label">Countries</span>
            </div>
            <div class="stat">
              <span class="stat-number">98%</span>
              <span class="stat-label">Employee Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Work With Us -->
      <section class="why-work-with-us">
        <div class="container">
          <h2 class="section-title">Why Work With Quantum PMC?</h2>
          <div class="benefits-grid">
            <div class="benefit-card">
              <div class="benefit-icon">🌍</div>
              <h3>Global Opportunities</h3>
              <p>Work on international projects across multiple countries and experience diverse cultures and construction practices</p>
              <ul class="benefit-list">
                <li>International assignments</li>
                <li>Cultural diversity</li>
                <li>Global networking</li>
              </ul>
            </div>
            
            <div class="benefit-card">
              <div class="benefit-icon">📚</div>
              <h3>Professional Development</h3>
              <p>Continuous learning and career growth with access to training, certifications, and mentorship programs</p>
              <ul class="benefit-list">
                <li>Training programs</li>
                <li>Certification support</li>
                <li>Mentorship opportunities</li>
              </ul>
            </div>
            
            <div class="benefit-card">
              <div class="benefit-icon">🏆</div>
              <h3>Impactful Projects</h3>
              <p>Contribute to landmark infrastructure projects that shape communities and improve lives</p>
              <ul class="benefit-list">
                <li>High-profile projects</li>
                <li>Community impact</li>
                <li>Technical innovation</li>
              </ul>
            </div>
            
            <div class="benefit-card">
              <div class="benefit-icon">🤝</div>
              <h3>Collaborative Culture</h3>
              <p>Work in a supportive environment that values teamwork, innovation, and mutual respect</p>
              <ul class="benefit-list">
                <li>Team collaboration</li>
                <li>Open communication</li>
                <li>Innovation culture</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Open Positions -->
      <section class="open-positions">
        <div class="container">
          <h2 class="section-title">Open Positions</h2>
          <div class="positions-grid">
            <div class="position-card">
              <div class="position-header">
                <h3>Senior Project Manager</h3>
                <span class="position-type">Full-time</span>
              </div>
              <p class="position-location">📍 Dubai, UAE</p>
              <p class="position-description">Lead complex infrastructure projects from initiation to completion, managing teams, budgets, and stakeholder relationships.</p>
              <div class="position-requirements">
                <h4>Requirements:</h4>
                <ul>
                  <li>10+ years project management experience</li>
                  <li>PMP certification preferred</li>
                  <li>Infrastructure/construction background</li>
                  <li>Strong leadership skills</li>
                </ul>
              </div>
              <div class="position-tags">
                <span class="tag">Leadership</span>
                <span class="tag">Infrastructure</span>
                <span class="tag">PMP</span>
              </div>
              <a routerLink="/careers/senior-project-manager" class="apply-button">Apply Now</a>
            </div>

            <div class="position-card">
              <div class="position-header">
                <h3>Claims Specialist</h3>
                <span class="position-type">Full-time</span>
              </div>
              <p class="position-location">📍 Doha, Qatar</p>
              <p class="position-description">Handle complex construction claims, conduct investigations, and provide expert analysis for dispute resolution.</p>
              <div class="position-requirements">
                <h4>Requirements:</h4>
                <ul>
                  <li>5+ years claims experience</li>
                  <li>Construction industry knowledge</li>
                  <li>Analytical and negotiation skills</li>
                  <li>Legal background preferred</li>
                </ul>
              </div>
              <div class="position-tags">
                <span class="tag">Claims</span>
                <span class="tag">Construction</span>
                <span class="tag">Legal</span>
              </div>
              <a routerLink="/careers/claims-specialist" class="apply-button">Apply Now</a>
            </div>

            <div class="position-card">
              <div class="position-header">
                <h3>Risk Analyst</h3>
                <span class="position-type">Full-time</span>
              </div>
              <p class="position-location">📍 Riyadh, Saudi Arabia</p>
              <p class="position-description">Identify, assess, and mitigate project risks through comprehensive analysis and strategic planning.</p>
              <div class="position-requirements">
                <h4>Requirements:</h4>
                <ul>
                  <li>3+ years risk management experience</li>
                  <li>Project management background</li>
                  <li>Strong analytical skills</li>
                  <li>Risk assessment methodologies</li>
                </ul>
              </div>
              <div class="position-tags">
                <span class="tag">Risk Management</span>
                <span class="tag">Analysis</span>
                <span class="tag">Strategy</span>
              </div>
              <a routerLink="/careers/risk-analyst" class="apply-button">Apply Now</a>
            </div>

            <div class="position-card">
              <div class="position-header">
                <h3>Construction Engineer</h3>
                <span class="position-type">Full-time</span>
              </div>
              <p class="position-location">📍 Muscat, Oman</p>
              <p class="position-description">Provide technical expertise and engineering support for construction and infrastructure projects.</p>
              <div class="position-requirements">
                <h4>Requirements:</h4>
                <ul>
                  <li>Bachelor's in Civil Engineering</li>
                  <li>3+ years construction experience</li>
                  <li>Technical design skills</li>
                  <li>Site supervision experience</li>
                </ul>
              </div>
              <div class="position-tags">
                <span class="tag">Engineering</span>
                <span class="tag">Construction</span>
                <span class="tag">Technical</span>
              </div>
              <a routerLink="/careers/construction-engineer" class="apply-button">Apply Now</a>
            </div>

            <div class="position-card">
              <div class="position-header">
                <h3>Business Development Manager</h3>
                <span class="position-type">Full-time</span>
              </div>
              <p class="position-location">📍 Abu Dhabi, UAE</p>
              <p class="position-description">Develop new business opportunities and maintain client relationships in the construction and infrastructure sectors.</p>
              <div class="position-requirements">
                <h4>Requirements:</h4>
                <ul>
                  <li>5+ years business development experience</li>
                  <li>Construction industry knowledge</li>
                  <li>Strong networking skills</li>
                  <li>Sales and negotiation abilities</li>
                </ul>
              </div>
              <div class="position-tags">
                <span class="tag">Business Development</span>
                <span class="tag">Sales</span>
                <span class="tag">Networking</span>
              </div>
              <a routerLink="/careers/business-development" class="apply-button">Apply Now</a>
            </div>

            <div class="position-card">
              <div class="position-header">
                <h3>Quality Assurance Manager</h3>
                <span class="position-type">Full-time</span>
              </div>
              <p class="position-location">📍 Manama, Bahrain</p>
              <p class="position-description">Ensure project quality standards and compliance with international construction and safety regulations.</p>
              <div class="position-requirements">
                <h4>Requirements:</h4>
                <ul>
                  <li>7+ years QA/QC experience</li>
                  <li>ISO certification knowledge</li>
                  <li>Construction safety expertise</li>
                  <li>Audit and inspection skills</li>
                </ul>
              </div>
              <div class="position-tags">
                <span class="tag">Quality Assurance</span>
                <span class="tag">Compliance</span>
                <span class="tag">Safety</span>
              </div>
              <a routerLink="/careers/quality-assurance" class="apply-button">Apply Now</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Company Culture -->
      <section class="company-culture">
        <div class="container">
          <h2 class="section-title">Our Company Culture</h2>
          <div class="culture-grid">
            <div class="culture-card">
              <div class="culture-icon">🎯</div>
              <h3>Excellence</h3>
              <p>We strive for excellence in everything we do, from project delivery to client relationships</p>
            </div>
            
            <div class="culture-card">
              <div class="culture-icon">🤝</div>
              <h3>Collaboration</h3>
              <p>Teamwork and collaboration are at the heart of our success and project delivery</p>
            </div>
            
            <div class="culture-card">
              <div class="culture-icon">💡</div>
              <h3>Innovation</h3>
              <p>We embrace new technologies and innovative approaches to solve complex challenges</p>
            </div>
            
            <div class="culture-card">
              <div class="culture-icon">🌱</div>
              <h3>Growth</h3>
              <p>Continuous learning and professional development opportunities for all team members</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Benefits & Perks -->
      <section class="benefits-perks">
        <div class="container">
          <h2 class="section-title">Benefits & Perks</h2>
          <div class="benefits-grid">
            <div class="benefit-item">
              <div class="benefit-icon">💰</div>
              <h3>Competitive Salary</h3>
              <p>Attractive compensation packages with performance-based bonuses</p>
            </div>
            
            <div class="benefit-item">
              <div class="benefit-icon">🏥</div>
              <h3>Health Insurance</h3>
              <p>Comprehensive health, dental, and vision coverage for you and your family</p>
            </div>
            
            <div class="benefit-item">
              <div class="benefit-icon">📚</div>
              <h3>Professional Development</h3>
              <p>Training programs, certification support, and conference attendance</p>
            </div>
            
            <div class="benefit-item">
              <div class="benefit-icon">🌍</div>
              <h3>Travel Opportunities</h3>
              <p>International project assignments and travel to exciting locations</p>
            </div>
            
            <div class="benefit-item">
              <div class="benefit-icon">🏠</div>
              <h3>Flexible Work</h3>
              <p>Remote work options and flexible scheduling where possible</p>
            </div>
            
            <div class="benefit-item">
              <div class="benefit-icon">🎉</div>
              <h3>Team Events</h3>
              <p>Regular team building activities and social events</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Application Process -->
      <section class="application-process">
        <div class="container">
          <h2 class="section-title">Application Process</h2>
          <div class="process-steps">
            <div class="process-step">
              <div class="step-number">1</div>
              <h3>Submit Application</h3>
              <p>Complete online application with resume and cover letter</p>
            </div>
            
            <div class="process-step">
              <div class="step-number">2</div>
              <h3>Initial Review</h3>
              <p>HR team reviews application and qualifications</p>
            </div>
            
            <div class="process-step">
              <div class="step-number">3</div>
              <h3>Technical Interview</h3>
              <p>Technical assessment and skills evaluation</p>
            </div>
            
            <div class="process-step">
              <div class="step-number">4</div>
              <h3>Final Interview</h3>
              <p>Meeting with hiring manager and team members</p>
            </div>
            
            <div class="process-step">
              <div class="step-number">5</div>
              <h3>Offer & Onboarding</h3>
              <p>Job offer and comprehensive onboarding process</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact CTA -->
      <section class="contact-cta">
        <div class="container">
          <h2>Don't See the Right Position?</h2>
          <p>We're always looking for talented professionals. Send us your resume and we'll keep you in mind for future opportunities.</p>
          <div class="cta-buttons">
            <a routerLink="/contact" class="cta-button primary">Send Resume</a>
            <a routerLink="/about" class="cta-button secondary">Learn More About Us</a>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .careers-content {
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

    /* Why Work With Us */
    .why-work-with-us {
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

    /* Open Positions */
    .open-positions {
      background: white;
      padding: 4rem 0;
    }

    .positions-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
    }

    .position-card {
      background: #f8f9fa;
      padding: 2rem;
      border-radius: 12px;
      border: 2px solid transparent;
      transition: all 0.3s ease;
    }

    .position-card:hover {
      border-color: #3498db;
      transform: translateY(-5px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
    }

    .position-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }

    .position-header h3 {
      color: #2c3e50;
      font-size: 1.4rem;
      font-weight: 600;
      margin: 0;
    }

    .position-type {
      background: #e8f5e8;
      color: #27ae60;
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 600;
    }

    .position-location {
      color: #7f8c8d;
      font-size: 0.9rem;
      margin-bottom: 1rem;
      font-style: italic;
    }

    .position-description {
      color: #34495e;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .position-requirements h4 {
      color: #2c3e50;
      margin-bottom: 0.5rem;
      font-size: 1rem;
      font-weight: 600;
    }

    .position-requirements ul {
      list-style: none;
      padding: 0;
      margin-bottom: 1.5rem;
    }

    .position-requirements li {
      padding: 0.25rem 0;
      color: #34495e;
      position: relative;
      padding-left: 1.5rem;
      font-size: 0.9rem;
    }

    .position-requirements li:before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #27ae60;
      font-weight: bold;
    }

    .position-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
    }

    .tag {
      background: #e8f4fd;
      color: #2f39d3;
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 500;
    }

    .apply-button {
      background: #3498db;
      color: white;
      padding: 0.75rem 1.5rem;
      text-decoration: none;
      border-radius: 5px;
      font-weight: 600;
      transition: all 0.3s ease;
      display: inline-block;
      font-size: 0.9rem;
    }

    .apply-button:hover {
      background: #2980b9;
      transform: translateY(-2px);
    }

    /* Company Culture */
    .company-culture {
      background: #f8f9fa;
      padding: 4rem 0;
    }

    .culture-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .culture-card {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      text-align: center;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }

    .culture-card:hover {
      transform: translateY(-5px);
    }

    .culture-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .culture-card h3 {
      color: #2c3e50;
      margin-bottom: 1rem;
      font-size: 1.3rem;
      font-weight: 600;
    }

    .culture-card p {
      color: #34495e;
      line-height: 1.6;
    }

    /* Benefits & Perks */
    .benefits-perks {
      background: white;
      padding: 4rem 0;
    }

    .benefits-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .benefit-item {
      background: #f8f9fa;
      padding: 2rem;
      border-radius: 12px;
      text-align: center;
      transition: transform 0.3s ease;
      border: 2px solid transparent;
    }

    .benefit-item:hover {
      transform: translateY(-5px);
      border-color: #3498db;
    }

    .benefit-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .benefit-item h3 {
      color: #2c3e50;
      margin-bottom: 1rem;
      font-size: 1.3rem;
      font-weight: 600;
    }

    .benefit-item p {
      color: #34495e;
      line-height: 1.6;
    }

    /* Application Process */
    .application-process {
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

      .positions-grid {
        grid-template-columns: 1fr;
      }

      .benefits-grid {
        grid-template-columns: 1fr;
      }

      .culture-grid {
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
export class CareersComponent { }
