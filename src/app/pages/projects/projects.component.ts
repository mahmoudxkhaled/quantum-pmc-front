import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="projects-content">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container">
          <h1 class="page-title">Our Projects</h1>
          <p class="hero-subtitle">Successfully delivered projects across various sectors and scales</p>
        </div>
      </section>

      <!-- Projects Grid -->
      <section class="projects-showcase">
        <div class="container">
          <div class="projects-grid">
            <div class="project-card">
              <div class="project-image samra"></div>
              <div class="project-content">
                <h3>Samra 400kV Grid Station, Jordan</h3>
                <p class="project-location">Jordan Ministry of Transport Project Team</p>
                <p class="project-description">High-voltage electrical infrastructure project for the national power grid, involving complex engineering and construction management.</p>
                <div class="project-tags">
                  <span class="tag">Infrastructure</span>
                  <span class="tag">Electrical</span>
                  <span class="tag">Government</span>
                </div>
                <a [routerLink]="['/projects', 'samra']" class="project-link">Read more</a>
              </div>
            </div>

            <div class="project-card">
              <div class="project-image hospital"></div>
              <div class="project-content">
                <h3>King Faisal Specialist Hospital and Research Center</h3>
                <p class="project-location">Healthcare Infrastructure</p>
                <p class="project-description">State-of-the-art medical facility construction with advanced healthcare technology integration and specialized medical units.</p>
                <div class="project-tags">
                  <span class="tag">Healthcare</span>
                  <span class="tag">Hospital</span>
                  <span class="tag">Research</span>
                </div>
                <a [routerLink]="['/projects', 'king-faisal']" class="project-link">Read more</a>
              </div>
            </div>

            <div class="project-card">
              <div class="project-image airport"></div>
              <div class="project-content">
                <h3>Development of Muscat International Airport Project</h3>
                <p class="project-location">Oman Aviation Infrastructure</p>
                <p class="project-description">Major airport expansion and modernization project including terminal buildings, runways, and supporting infrastructure.</p>
                <div class="project-tags">
                  <span class="tag">Aviation</span>
                  <span class="tag">Infrastructure</span>
                  <span class="tag">Transportation</span>
                </div>
                <a [routerLink]="['/projects', 'muscat-airport']" class="project-link">Read more</a>
              </div>
            </div>

            <div class="project-card">
              <div class="project-image qatalum"></div>
              <div class="project-content">
                <h3>Qatar Aluminum Factory [Qatalum]</h3>
                <p class="project-location">Industrial Manufacturing</p>
                <p class="project-description">Large-scale industrial facility construction for aluminum production with advanced manufacturing processes and environmental controls.</p>
                <div class="project-tags">
                  <span class="tag">Industrial</span>
                  <span class="tag">Manufacturing</span>
                  <span class="tag">Aluminum</span>
                </div>
                <a [routerLink]="['/projects', 'qatalum']" class="project-link">Read more</a>
              </div>
            </div>

            <div class="project-card">
              <div class="project-image haram"></div>
              <div class="project-content">
                <h3>Expansion of Haram (the Holy Mosque in Makkah)</h3>
                <p class="project-location">Religious Infrastructure</p>
                <p class="project-description">Sacred religious site expansion project involving complex architectural design, cultural sensitivity, and massive scale construction.</p>
                <div class="project-tags">
                  <span class="tag">Religious</span>
                  <span class="tag">Cultural</span>
                  <span class="tag">Architecture</span>
                </div>
                <a [routerLink]="['/projects', 'haram-expansion']" class="project-link">Read more</a>
              </div>
            </div>

            <div class="project-card">
              <div class="project-image qatar-electrical"></div>
              <div class="project-content">
                <h3>The Expansion of Qatar Electrical Network [Phase 7]</h3>
                <p class="project-location">Qatar Power Infrastructure</p>
                <p class="project-description">National electrical grid expansion project including substations, transmission lines, and smart grid technology implementation.</p>
                <div class="project-tags">
                  <span class="tag">Power</span>
                  <span class="tag">Smart Grid</span>
                  <span class="tag">Infrastructure</span>
                </div>
                <a [routerLink]="['/projects', 'qatar-electrical']" class="project-link">Read more</a>
              </div>
            </div>

            <div class="project-card">
              <div class="project-image master-plan"></div>
              <div class="project-content">
                <h3>Bahrain Bay Development Project – Infrastructure Works</h3>
                <p class="project-location">Bahrain Urban Development</p>
                <p class="project-description">Comprehensive urban development project including roads, utilities, landscaping, and supporting infrastructure for a new waterfront district.</p>
                <div class="project-tags">
                  <span class="tag">Urban</span>
                  <span class="tag">Infrastructure</span>
                  <span class="tag">Waterfront</span>
                </div>
                <a [routerLink]="['/projects', 'bahrain-bay']" class="project-link">Read more</a>
              </div>
            </div>

            <div class="project-card">
              <div class="project-image hamad-port"></div>
              <div class="project-content">
                <h3>Hamad Port Project, Doha, Qatar</h3>
                <p class="project-location">Qatar Ministry of Transport Project Team</p>
                <p class="project-description">Major seaport development including container terminals, cargo handling facilities, and maritime infrastructure for international trade.</p>
                <div class="project-tags">
                  <span class="tag">Maritime</span>
                  <span class="tag">Port</span>
                  <span class="tag">Trade</span>
                </div>
                <a [routerLink]="['/projects', 'hamad-port']" class="project-link">Read more</a>
              </div>
            </div>

            <div class="project-card">
              <div class="project-image qatar-electrical-6"></div>
              <div class="project-content">
                <h3>The Expansion of Qatar Electrical Network [Phase 6]</h3>
                <p class="project-location">Qatar Power Infrastructure</p>
                <p class="project-description">Advanced electrical network expansion with modern power distribution systems and renewable energy integration.</p>
                <div class="project-tags">
                  <span class="tag">Power</span>
                  <span class="tag">Renewable</span>
                  <span class="tag">Distribution</span>
                </div>
                <a [routerLink]="['/projects', 'qatar-electrical-6']" class="project-link">Read more</a>
              </div>
            </div>

            <div class="project-card">
              <div class="project-image shams-marina"></div>
              <div class="project-content">
                <h3>Shams Abu Dhabi Marina & Sea Wall Project</h3>
                <p class="project-location">Abu Dhabi, UAE - Athena Emirates LLC</p>
                <p class="project-description">Luxury marina development with sea wall protection, including berthing facilities, recreational areas, and coastal engineering works.</p>
                <div class="project-tags">
                  <span class="tag">Marina</span>
                  <span class="tag">Coastal</span>
                  <span class="tag">Luxury</span>
                </div>
                <a [routerLink]="['/projects', 'shams-marina']" class="project-link">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Project Categories -->
      <section class="project-categories">
        <div class="container">
          <h2 class="section-title">Project Categories</h2>
          <div class="categories-grid">
            <div class="category-card">
              <div class="category-icon">🏗️</div>
              <h3>Infrastructure</h3>
              <p>Roads, bridges, utilities, and public works projects</p>
              <span class="project-count">4 Projects</span>
            </div>
            
            <div class="category-card">
              <div class="category-icon">🏥</div>
              <h3>Healthcare</h3>
              <p>Hospitals, clinics, and medical facilities</p>
              <span class="project-count">1 Project</span>
            </div>
            
            <div class="category-card">
              <div class="category-icon">✈️</div>
              <h3>Aviation</h3>
              <p>Airports, terminals, and aviation infrastructure</p>
              <span class="project-count">1 Project</span>
            </div>
            
            <div class="category-card">
              <div class="category-icon">🏭</div>
              <h3>Industrial</h3>
              <p>Manufacturing plants and industrial facilities</p>
              <span class="project-count">1 Project</span>
            </div>
            
            <div class="category-card">
              <div class="category-icon">🕌</div>
              <h3>Religious</h3>
              <p>Places of worship and religious infrastructure</p>
              <span class="project-count">1 Project</span>
            </div>
            
            <div class="category-card">
              <div class="category-icon">⚡</div>
              <h3>Power & Energy</h3>
              <p>Electrical grids, power plants, and energy infrastructure</p>
              <span class="project-count">2 Projects</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact CTA -->
      <section class="contact-cta">
        <div class="container">
          <h2>Interested in Our Project Management Services?</h2>
          <p>Let us help you deliver your next project successfully with our proven expertise and comprehensive services.</p>
          <a routerLink="/contact" class="cta-button">Get in Touch</a>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .projects-content {
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

    /* Projects Showcase */
    .projects-showcase {
      background: #f8f9fa;
      padding: 4rem 0;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
    }

    .project-card {
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .project-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
    }

    .project-image {
      height: 200px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }

    .project-image.samra { background-color: #3498db; }
    .project-image.hospital { background-color: #e74c3c; }
    .project-image.airport { background-color: #f39c12; }
    .project-image.qatalum { background-color: #9b59b6; }
    .project-image.haram { background-color: #1abc9c; }
    .project-image.qatar-electrical { background-color: #34495e; }
    .project-image.master-plan { background-color: #16a085; }
    .project-image.hamad-port { background-color: #2980b9; }
    .project-image.qatar-electrical-6 { background-color: #8e44ad; }
    .project-image.shams-marina { background-color: #27ae60; }

    .project-content {
      padding: 1.5rem;
    }

    .project-content h3 {
      color: #2c3e50;
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
      font-weight: 600;
      line-height: 1.3;
    }

    .project-location {
      color: #7f8c8d;
      font-size: 0.9rem;
      margin-bottom: 1rem;
      font-style: italic;
    }

    .project-description {
      color: #34495e;
      line-height: 1.6;
      margin-bottom: 1rem;
      font-size: 0.95rem;
    }

    .project-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }

    .tag {
      background: #e8f4fd;
      color: #2f39d3;
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 500;
    }

    .project-link {
      color: #2f39d3;
      text-decoration: none;
      font-weight: 600;
      font-size: 0.9rem;
      transition: color 0.3s ease;
    }

    .project-link:hover {
      color: #0c0f26;
      text-decoration: underline;
    }

    /* Project Categories */
    .project-categories {
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

    .categories-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .category-card {
      background: #f8f9fa;
      padding: 2rem;
      border-radius: 12px;
      text-align: center;
      transition: transform 0.3s ease;
      border: 2px solid transparent;
    }

    .category-card:hover {
      transform: translateY(-5px);
      border-color: #2f39d3;
    }

    .category-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .category-card h3 {
      color: #2c3e50;
      font-size: 1.3rem;
      margin-bottom: 1rem;
      font-weight: 600;
    }

    .category-card p {
      color: #34495e;
      line-height: 1.6;
      margin-bottom: 1rem;
    }

    .project-count {
      background: #2f39d3;
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 600;
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

      .projects-grid {
        grid-template-columns: 1fr;
      }

      .categories-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 480px) {
      .categories-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ProjectsComponent { }
