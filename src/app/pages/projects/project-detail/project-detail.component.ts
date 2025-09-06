import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';

interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  client: string;
  duration: string;
  value: string;
  heroImage: string;
  overview: string;
  description: string;
  stats: Array<{ number: string; label: string }>;
  scope: Array<{
    icon: string;
    title: string;
    items: string[];
  }>;
  challenges: Array<{
    challenge: string;
    description: string;
    solution: string;
  }>;
  results: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  testimonial: {
    quote: string;
    author: string;
    position: string;
  };
  relatedProjects: Array<{
    id: string;
    title: string;
    description: string;
    imageClass: string;
  }>;
}

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="project-detail-content" *ngIf="project">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container">
          <div class="hero-content">
            <div class="hero-text">
              <h1 class="project-title">{{ project.title }}</h1>
              <p class="project-subtitle">{{ project.subtitle }}</p>
              <div class="project-meta">
                <div class="meta-item">
                  <span class="meta-label">Location:</span>
                  <span class="meta-value">{{ project.location }}</span>
                </div>
                <div class="meta-item">
                  <span class="meta-label">Client:</span>
                  <span class="meta-value">{{ project.client }}</span>
                </div>
                <div class="meta-item">
                  <span class="meta-label">Duration:</span>
                  <span class="meta-value">{{ project.duration }}</span>
                </div>
                <div class="meta-item">
                  <span class="meta-label">Value:</span>
                  <span class="meta-value">{{ project.value }}</span>
                </div>
              </div>
            </div>
            <div class="hero-image">
              <div class="image-placeholder" [class]="project.heroImage"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Project Overview -->
      <section class="project-overview">
        <div class="container">
          <h2 class="section-title">Project Overview</h2>
          <div class="overview-content">
            <div class="overview-text">
              <p>{{ project.overview }}</p>
              <p>{{ project.description }}</p>
            </div>
            <div class="overview-stats">
              <div class="stat-card" *ngFor="let stat of project.stats">
                <span class="stat-number">{{ stat.number }}</span>
                <span class="stat-label">{{ stat.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Project Scope -->
      <section class="project-scope">
        <div class="container">
          <h2 class="section-title">Project Scope</h2>
          <div class="scope-grid">
            <div class="scope-item" *ngFor="let scope of project.scope">
              <div class="scope-icon">{{ scope.icon }}</div>
              <h3>{{ scope.title }}</h3>
              <ul>
                <li *ngFor="let item of scope.items">{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Challenges & Solutions -->
      <section class="challenges-solutions">
        <div class="container">
          <h2 class="section-title">Challenges & Solutions</h2>
          <div class="challenges-grid">
            <div class="challenge-card" *ngFor="let challenge of project.challenges">
              <h3>Challenge: {{ challenge.challenge }}</h3>
              <p>{{ challenge.description }}</p>
              <div class="solution">
                <strong>Solution:</strong> {{ challenge.solution }}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Project Results -->
      <section class="project-results">
        <div class="container">
          <h2 class="section-title">Project Results</h2>
          <div class="results-grid">
            <div class="result-card" *ngFor="let result of project.results">
              <div class="result-icon">{{ result.icon }}</div>
              <h3>{{ result.title }}</h3>
              <p>{{ result.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Client Testimonial -->
      <section class="client-testimonial">
        <div class="container">
          <div class="testimonial-content">
            <div class="quote-icon">💬</div>
            <blockquote>
              "{{ project.testimonial.quote }}"
            </blockquote>
            <div class="testimonial-author">
              <strong>{{ project.testimonial.author }}</strong>
              <span>{{ project.testimonial.position }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Related Projects -->
      <section class="related-projects">
        <div class="container">
          <h2 class="section-title">Related Projects</h2>
          <div class="projects-grid">
            <a 
              [routerLink]="['/projects', relatedProject.id]" 
              class="project-link" 
              *ngFor="let relatedProject of project.relatedProjects"
            >
              <div class="project-card">
                <div class="project-image" [class]="relatedProject.imageClass"></div>
                <h3>{{ relatedProject.title }}</h3>
                <p>{{ relatedProject.description }}</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <!-- Contact CTA -->
      <section class="contact-cta">
        <div class="container">
          <h2>Interested in This Type of Project?</h2>
          <p>Let our expert team help you deliver your next project successfully.</p>
          <div class="cta-buttons">
            <a routerLink="/contact" class="cta-button primary">Get in Touch</a>
            <a routerLink="/projects" class="cta-button secondary">View All Projects</a>
          </div>
        </div>
      </section>
    </div>



    <!-- Error State -->
    <div class="error-state" *ngIf="error">
      <div class="error-icon">⚠️</div>
      <h2>Project Not Found</h2>
      <p>{{ error }}</p>
      <a routerLink="/projects" class="cta-button primary">Back to Projects</a>
    </div>
  `,
  styles: [`
    .project-detail-content {
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
    }

    .hero-content {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 3rem;
      align-items: center;
    }

    .project-title {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 1rem;
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    .project-subtitle {
      font-size: 1.3rem;
      opacity: 0.9;
      margin-bottom: 2rem;
      line-height: 1.6;
    }

    .project-meta {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }

    .meta-item {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .meta-label {
      font-size: 0.9rem;
      opacity: 0.7;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .meta-value {
      font-size: 1.1rem;
      font-weight: 600;
      color: #f39c12;
    }

    .hero-image {
      text-align: center;
    }

    .image-placeholder {
      width: 300px;
      height: 200px;
      border-radius: 12px;
      margin: 0 auto;
      background: linear-gradient(135deg, #667eea, #764ba2);
    }

    /* Project Overview */
    .project-overview {
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

    .overview-content {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 3rem;
      align-items: start;
    }

    .overview-text p {
      color: #34495e;
      line-height: 1.8;
      margin-bottom: 1.5rem;
      font-size: 1.1rem;
    }

    .overview-stats {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .stat-card {
      background: white;
      padding: 1.5rem;
      border-radius: 12px;
      text-align: center;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }

    .stat-number {
      display: block;
      font-size: 2rem;
      font-weight: 700;
      color: #667eea;
      margin-bottom: 0.5rem;
    }

    .stat-label {
      color: #2c3e50;
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    /* Project Scope */
    .project-scope {
      background: white;
      padding: 4rem 0;
    }

    .scope-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .scope-item {
      background: #f8f9fa;
      padding: 2rem;
      border-radius: 12px;
      border-left: 4px solid #667eea;
    }

    .scope-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .scope-item h3 {
      color: #2c3e50;
      margin-bottom: 1rem;
      font-size: 1.3rem;
      font-weight: 600;
    }

    .scope-item ul {
      list-style: none;
      padding: 0;
    }

    .scope-item li {
      padding: 0.5rem 0;
      color: #34495e;
      position: relative;
      padding-left: 1.5rem;
      line-height: 1.5;
    }

    .scope-item li:before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #27ae60;
      font-weight: bold;
    }

    /* Challenges & Solutions */
    .challenges-solutions {
      background: #f8f9fa;
      padding: 4rem 0;
    }

    .challenges-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
    }

    .challenge-card {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }

    .challenge-card h3 {
      color: #e74c3c;
      margin-bottom: 1rem;
      font-size: 1.2rem;
      font-weight: 600;
    }

    .challenge-card p {
      color: #34495e;
      line-height: 1.6;
      margin-bottom: 1rem;
    }

    .solution {
      background: #e8f5e8;
      padding: 1rem;
      border-radius: 8px;
      color: #27ae60;
      font-size: 0.9rem;
      line-height: 1.5;
    }

    /* Project Results */
    .project-results {
      background: white;
      padding: 4rem 0;
    }

    .results-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .result-card {
      background: #f8f9fa;
      padding: 2rem;
      border-radius: 12px;
      text-align: center;
      transition: transform 0.3s ease;
      border: 2px solid transparent;
    }

    .result-card:hover {
      transform: translateY(-5px);
      border-color: #667eea;
    }

    .result-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .result-card h3 {
      color: #2c3e50;
      margin-bottom: 1rem;
      font-size: 1.3rem;
      font-weight: 600;
    }

    .result-card p {
      color: #34495e;
      line-height: 1.6;
    }

    /* Client Testimonial */
    .client-testimonial {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 4rem 0;
      text-align: center;
    }

    .testimonial-content {
      max-width: 800px;
      margin: 0 auto;
    }

    .quote-icon {
      font-size: 3rem;
      margin-bottom: 2rem;
      opacity: 0.8;
    }

    blockquote {
      font-size: 1.3rem;
      line-height: 1.8;
      margin-bottom: 2rem;
      font-style: italic;
    }

    .testimonial-author {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .testimonial-author strong {
      font-size: 1.2rem;
    }

    .testimonial-author span {
      opacity: 0.8;
      font-size: 0.9rem;
    }

    /* Related Projects */
    .related-projects {
      background: #f8f9fa;
      padding: 4rem 0;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .project-link {
      text-decoration: none;
      color: inherit;
    }

    .project-card {
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }

    .project-card:hover {
      transform: translateY(-5px);
    }

    .project-image {
      height: 200px;
      background-size: cover;
      background-position: center;
    }

    .project-card h3 {
      color: #2c3e50;
      padding: 1.5rem 1.5rem 0.5rem;
      font-size: 1.2rem;
      font-weight: 600;
    }

    .project-card p {
      color: #34495e;
      padding: 0 1.5rem 1.5rem;
      line-height: 1.6;
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



    /* Error State */
    .error-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 50vh;
      text-align: center;
      padding: 2rem;
    }

    .error-icon {
      font-size: 4rem;
      margin-bottom: 1rem;
    }

    .error-state h2 {
      color: #e74c3c;
      margin-bottom: 1rem;
    }

    .error-state p {
      color: #34495e;
      margin-bottom: 2rem;
      max-width: 500px;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .hero-content {
        grid-template-columns: 1fr;
        text-align: center;
      }

      .project-title {
        font-size: 2rem;
      }

      .section-title {
        font-size: 2rem;
      }

      .overview-content {
        grid-template-columns: 1fr;
      }

      .project-meta {
        grid-template-columns: 1fr;
      }

      .challenges-grid {
        grid-template-columns: 1fr;
      }

      .results-grid {
        grid-template-columns: 1fr;
      }

      .projects-grid {
        grid-template-columns: 1fr;
      }

      .cta-buttons {
        flex-direction: column;
        align-items: center;
      }
    }
  `]
})
export class ProjectDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);

  project: ProjectData | null = null;
  error: string | null = null;

  // Static project data - no HTTP needed
  private projectsData = {
    "samra": {
      "id": "samra",
      "title": "Samra 400kV Grid Station",
      "subtitle": "High-voltage electrical infrastructure and power distribution systems",
      "location": "Jordan",
      "client": "Jordan Electric Power Company",
      "duration": "24 Months",
      "value": "$120M",
      "heroImage": "samra-hero",
      "overview": "The Samra 400kV Grid Station project represents a critical infrastructure development for Jordan's power grid, providing high-voltage electrical distribution and transmission capabilities to support the country's growing energy demands.",
      "description": "Our project management team oversaw the construction of a major electrical substation including high-voltage equipment, control systems, and extensive electrical infrastructure.",
      "stats": [
        { "number": "400kV", "label": "Voltage Level" },
        { "number": "15", "label": "Transformers" },
        { "number": "24/7", "label": "Operation" }
      ],
      "scope": [
        {
          "icon": "⚡",
          "title": "Electrical Infrastructure",
          "items": [
            "High-voltage transformers",
            "Circuit breakers and switches",
            "Control and protection systems",
            "Electrical substation buildings"
          ]
        },
        {
          "icon": "🏗️",
          "title": "Civil Construction",
          "items": [
            "Foundation and structural work",
            "Equipment platforms and supports",
            "Access roads and drainage",
            "Security fencing and lighting"
          ]
        },
        {
          "icon": "🔧",
          "title": "Systems Integration",
          "items": [
            "SCADA control systems",
            "Communication networks",
            "Safety and protection systems",
            "Testing and commissioning"
          ]
        }
      ],
      "challenges": [
        {
          "challenge": "High-Voltage Safety",
          "description": "Managing construction activities in high-voltage environments required strict safety protocols.",
          "solution": "Implemented comprehensive safety training and specialized equipment for high-voltage work."
        },
        {
          "challenge": "Technical Complexity",
          "description": "Integrating complex electrical systems with civil infrastructure.",
          "solution": "Developed detailed coordination plans and engaged specialized electrical engineering teams."
        },
        {
          "challenge": "Schedule Pressure",
          "description": "Meeting critical power grid expansion deadlines.",
          "solution": "Implemented parallel construction activities and 24/7 construction schedules."
        }
      ],
      "results": [
        {
          "icon": "✅",
          "title": "On-Time Delivery",
          "description": "Project completed within the 24-month schedule, meeting all electrical grid milestones."
        },
        {
          "icon": "💰",
          "title": "Budget Compliance",
          "description": "Delivered within budget while exceeding all technical specifications."
        },
        {
          "icon": "🔒",
          "title": "Perfect Safety Record",
          "description": "Achieved zero safety incidents across 100,000+ man-hours of construction."
        },
        {
          "icon": "📊",
          "title": "Performance Excellence",
          "description": "Grid station operational with 99.9% reliability rating."
        }
      ],
      "testimonial": {
        "quote": "Quantum PMC's expertise in electrical infrastructure was crucial to the success of the Samra Grid Station. Their project management ensured seamless delivery of critical power infrastructure.",
        "author": "Eng. Mohammad Al-Zoubi",
        "position": "Director of Grid Operations, JEPCO"
      },
      "relatedProjects": [
        {
          "id": "qatar-electrical",
          "title": "Qatar Electrical Network Phase 7",
          "description": "Power infrastructure expansion project",
          "imageClass": "electrical"
        },
        {
          "id": "qatar-electrical-6",
          "title": "Qatar Electrical Network Phase 6",
          "description": "Advanced power distribution systems",
          "imageClass": "electrical-6"
        }
      ]
    },
    "qatar-electrical": {
      "id": "qatar-electrical",
      "title": "Qatar Electrical Network Phase 7",
      "subtitle": "Power infrastructure expansion and grid modernization",
      "location": "Qatar",
      "client": "Qatar General Electricity & Water Corporation",
      "duration": "30 Months",
      "value": "$150M",
      "heroImage": "qatar-electrical-hero",
      "overview": "The Qatar Electrical Network Phase 7 project represents a significant expansion of power infrastructure, modernizing the electrical grid to support Qatar's growing energy demands and hosting major international events.",
      "description": "Our project management team oversaw the expansion of electrical infrastructure including new substations, transmission lines, and distribution networks to enhance power reliability and capacity.",
      "stats": [
        { "number": "600MW", "label": "Power Capacity" },
        { "number": "20", "label": "Substations" },
        { "number": "Smart", "label": "Grid Technology" }
      ],
      "scope": [
        {
          "icon": "⚡",
          "title": "Electrical Infrastructure",
          "items": [
            "High-voltage substations",
            "Transmission and distribution lines",
            "Power transformers and equipment",
            "Control and protection systems"
          ]
        },
        {
          "icon": "🏗️",
          "title": "Civil Construction",
          "items": [
            "Substation buildings and structures",
            "Equipment foundations and supports",
            "Access roads and security fencing",
            "Drainage and utility systems"
          ]
        },
        {
          "icon": "🔧",
          "title": "Systems Integration",
          "items": [
            "SCADA control systems",
            "Communication networks",
            "Smart grid technologies",
            "Testing and commissioning"
          ]
        }
      ],
      "challenges": [
        {
          "challenge": "Grid Integration",
          "description": "Integrating new electrical infrastructure with existing power grid systems.",
          "solution": "Developed comprehensive integration plans with detailed grid analysis and phased implementation."
        },
        {
          "challenge": "Event Timeline",
          "description": "Meeting critical deadlines for major international events.",
          "solution": "Implemented accelerated construction schedules with parallel activities and 24/7 operations."
        },
        {
          "challenge": "Technology Implementation",
          "description": "Implementing advanced smart grid technologies and systems.",
          "solution": "Engaged smart grid specialists and established comprehensive technology integration plans."
        }
      ],
      "results": [
        {
          "icon": "✅",
          "title": "On-Time Delivery",
          "description": "Project completed within the 30-month schedule, meeting all power infrastructure milestones."
        },
        {
          "icon": "💰",
          "title": "Budget Compliance",
          "description": "Delivered within budget while exceeding all electrical infrastructure specifications."
        },
        {
          "icon": "🔒",
          "title": "Perfect Safety Record",
          "description": "Achieved zero safety incidents across 120,000+ man-hours of construction."
        },
        {
          "icon": "📊",
          "title": "Power Excellence",
          "description": "Grid operational with enhanced capacity and smart grid capabilities."
        }
      ],
      "testimonial": {
        "quote": "Quantum PMC's expertise in electrical infrastructure was crucial to the success of Phase 7. Their project management ensured seamless grid expansion and modernization.",
        "author": "Eng. Essa Al-Kuwari",
        "position": "Director of Power Projects, KAHRAMAA"
      },
      "relatedProjects": [
        {
          "id": "samra",
          "title": "Samra 400kV Grid Station",
          "description": "High-voltage electrical infrastructure",
          "imageClass": "samra"
        },
        {
          "id": "qatar-electrical-6",
          "title": "Qatar Electrical Network Phase 6",
          "description": "Advanced power distribution systems",
          "imageClass": "electrical-6"
        }
      ]
    }
  };

  ngOnInit() {
    this.route.params.subscribe(params => {
      const projectId = params['id'];
      if (projectId) {
        this.loadProject(projectId);
      }
    });
  }

  private loadProject(projectId: string) {
    const project = this.projectsData[projectId as keyof typeof this.projectsData];
    if (project) {
      this.project = project;
      this.error = null;
    } else {
      this.error = `Project "${projectId}" not found.`;
      this.project = null;
    }
  }
}
