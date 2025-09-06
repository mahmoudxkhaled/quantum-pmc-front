import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <div class="contact-content">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container">
          <h1 class="page-title">Contact Us</h1>
          <p class="hero-subtitle">Get in touch with our expert team for project management and claims management services</p>
          <div class="hero-stats">
            <div class="stat">
              <span class="stat-number">24/7</span>
              <span class="stat-label">Support Available</span>
            </div>
            <div class="stat">
              <span class="stat-number">2hr</span>
              <span class="stat-label">Response Time</span>
            </div>
            <div class="stat">
              <span class="stat-number">100%</span>
              <span class="stat-label">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Information -->
      <section class="contact-information">
        <div class="container">
          <h2 class="section-title">Get In Touch</h2>
          <div class="contact-grid">
            <div class="contact-card">
              <div class="contact-icon">📧</div>
              <h3>Email Us</h3>
              <p>Send us an email and we'll get back to you within 2 hours</p>
              <div class="contact-details">
                <a href="mailto:info@quantumpmc.com" class="contact-link">info@quantumpmc.com</a>
                <a href="mailto:sales@quantumpmc.com" class="contact-link">sales@quantumpmc.com</a>
                <a href="mailto:support@quantumpmc.com" class="contact-link">support@quantumpmc.com</a>
              </div>
            </div>
            
            <div class="contact-card">
              <div class="contact-icon">📞</div>
              <h3>Call Us</h3>
              <p>Speak directly with our team during business hours</p>
              <div class="contact-details">
                <a href="tel:+971501234567" class="contact-link">+971 50 123 4567</a>
                <a href="tel:+974501234567" class="contact-link">+974 50 123 4567</a>
                <a href="tel:+966501234567" class="contact-link">+966 50 123 4567</a>
              </div>
            </div>
            
            <div class="contact-card">
              <div class="contact-icon">📍</div>
              <h3>Visit Us</h3>
              <p>Our main offices across the Middle East region</p>
              <div class="contact-details">
                <div class="address">
                  <strong>Dubai Office:</strong><br>
                  Sheikh Zayed Road, Dubai, UAE
                </div>
                <div class="address">
                  <strong>Doha Office:</strong><br>
                  West Bay, Doha, Qatar
                </div>
                <div class="address">
                  <strong>Riyadh Office:</strong><br>
                  King Fahd Road, Riyadh, KSA
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Form -->
      <section class="contact-form-section">
        <div class="container">
          <div class="form-container">
            <div class="form-header">
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and our team will get back to you promptly</p>
            </div>
            
            <form class="contact-form" (ngSubmit)="onSubmit()">
              <div class="form-row">
                <div class="form-group">
                  <label for="firstName">First Name *</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    [(ngModel)]="contactForm.firstName" 
                    required
                    placeholder="Enter your first name"
                  >
                </div>
                
                <div class="form-group">
                  <label for="lastName">Last Name *</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    [(ngModel)]="contactForm.lastName" 
                    required
                    placeholder="Enter your last name"
                  >
                </div>
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="email">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    [(ngModel)]="contactForm.email" 
                    required
                    placeholder="Enter your email address"
                  >
                </div>
                
                <div class="form-group">
                  <label for="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    [(ngModel)]="contactForm.phone" 
                    placeholder="Enter your phone number"
                  >
                </div>
              </div>
              
              <div class="form-group">
                <label for="company">Company Name</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  [(ngModel)]="contactForm.company" 
                  placeholder="Enter your company name"
                >
              </div>
              
              <div class="form-group">
                <label for="service">Service Interest *</label>
                <select 
                  id="service" 
                  name="service" 
                  [(ngModel)]="contactForm.service" 
                  required
                >
                  <option value="">Select a service</option>
                  <option value="project-management">Project Management Services</option>
                  <option value="claims-management">Claims Management Services</option>
                  <option value="consulting">Consulting Services</option>
                  <option value="other">Other Services</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="message">Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  [(ngModel)]="contactForm.message" 
                  rows="5" 
                  required
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>
              
              <div class="form-group checkbox-group">
                <input 
                  type="checkbox" 
                  id="newsletter" 
                  name="newsletter" 
                  [(ngModel)]="contactForm.newsletter"
                >
                <label for="newsletter">Subscribe to our newsletter for industry insights and updates</label>
              </div>
              
              <button type="submit" class="submit-button" [disabled]="isSubmitting">
                <span *ngIf="!isSubmitting">Send Message</span>
                <span *ngIf="isSubmitting">Sending...</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <!-- Office Locations -->
      <section class="office-locations">
        <div class="container">
          <h2 class="section-title">Our Office Locations</h2>
          <div class="locations-grid">
            <div class="location-card">
              <div class="location-header">
                <div class="location-icon">🇦🇪</div>
                <h3>Dubai, UAE</h3>
              </div>
              <div class="location-details">
                <p><strong>Address:</strong><br>
                Sheikh Zayed Road<br>
                Dubai, United Arab Emirates</p>
                <p><strong>Phone:</strong> +971 50 123 4567</p>
                <p><strong>Email:</strong> dubai@quantumpmc.com</p>
                <p><strong>Hours:</strong> Sun-Thu: 8:00 AM - 6:00 PM</p>
              </div>
            </div>
            
            <div class="location-card">
              <div class="location-header">
                <div class="location-icon">🇶🇦</div>
                <h3>Doha, Qatar</h3>
              </div>
              <div class="location-details">
                <p><strong>Address:</strong><br>
                West Bay<br>
                Doha, Qatar</p>
                <p><strong>Phone:</strong> +974 50 123 4567</p>
                <p><strong>Email:</strong> doha@quantumpmc.com</p>
                <p><strong>Hours:</strong> Sun-Thu: 8:00 AM - 6:00 PM</p>
              </div>
            </div>
            
            <div class="location-card">
              <div class="location-header">
                <div class="location-icon">🇸🇦</div>
                <h3>Riyadh, Saudi Arabia</h3>
              </div>
              <div class="location-details">
                <p><strong>Address:</strong><br>
                King Fahd Road<br>
                Riyadh, Saudi Arabia</p>
                <p><strong>Phone:</strong> +966 50 123 4567</p>
                <p><strong>Email:</strong> riyadh@quantumpmc.com</p>
                <p><strong>Hours:</strong> Sun-Thu: 8:00 AM - 6:00 PM</p>
              </div>
            </div>
            
            <div class="location-card">
              <div class="location-header">
                <div class="location-icon">🇧🇭</div>
                <h3>Manama, Bahrain</h3>
              </div>
              <div class="location-details">
                <p><strong>Address:</strong><br>
                Financial Harbour<br>
                Manama, Bahrain</p>
                <p><strong>Phone:</strong> +973 50 123 4567</p>
                <p><strong>Email:</strong> bahrain@quantumpmc.com</p>
                <p><strong>Hours:</strong> Sun-Thu: 8:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="faq-section">
        <div class="container">
          <h2 class="section-title">Frequently Asked Questions</h2>
          <div class="faq-grid">
            <div class="faq-item">
              <h3>What services does Quantum PMC offer?</h3>
              <p>We specialize in Project Management Services and Claims Management Services for construction and infrastructure projects across the Middle East and beyond.</p>
            </div>
            
            <div class="faq-item">
              <h3>How quickly do you respond to inquiries?</h3>
              <p>We typically respond to all inquiries within 2 hours during business hours, and within 24 hours for after-hours inquiries.</p>
            </div>
            
            <div class="faq-item">
              <h3>Do you work internationally?</h3>
              <p>Yes, we have experience working on projects across multiple countries in the Middle East, Europe, and Asia.</p>
            </div>
            
            <div class="faq-item">
              <h3>What industries do you specialize in?</h3>
              <p>We focus on construction, infrastructure, healthcare, aviation, industrial, and power & energy sectors.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact CTA -->
      <section class="contact-cta">
        <div class="container">
          <h2>Ready to Start Your Project?</h2>
          <p>Let's discuss how we can help you deliver your next project successfully. Contact us today for a free consultation.</p>
          <div class="cta-buttons">
            <a routerLink="/services" class="cta-button primary">View Our Services</a>
            <a routerLink="/projects" class="cta-button secondary">See Our Projects</a>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .contact-content {
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

    /* Contact Information */
    .contact-information {
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

    .contact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .contact-card {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      text-align: center;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }

    .contact-card:hover {
      transform: translateY(-5px);
    }

    .contact-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .contact-card h3 {
      color: #2c3e50;
      margin-bottom: 1rem;
      font-size: 1.3rem;
      font-weight: 600;
    }

    .contact-card p {
      color: #34495e;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .contact-details {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .contact-link {
      color: #3498db;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
    }

    .contact-link:hover {
      color: #2980b9;
      text-decoration: underline;
    }

    .address {
      color: #34495e;
      font-size: 0.9rem;
      line-height: 1.5;
    }

    /* Contact Form */
    .contact-form-section {
      background: white;
      padding: 4rem 0;
    }

    .form-container {
      max-width: 800px;
      margin: 0 auto;
      background: #f8f9fa;
      padding: 3rem;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }

    .form-header {
      text-align: center;
      margin-bottom: 2rem;
    }

    .form-header h2 {
      color: #2c3e50;
      font-size: 2rem;
      margin-bottom: 1rem;
      font-weight: 600;
    }

    .form-header p {
      color: #34495e;
      font-size: 1.1rem;
    }

    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
    }

    .form-group label {
      color: #2c3e50;
      font-weight: 600;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
    }

    .form-group input,
    .form-group select,
    .form-group textarea {
      padding: 0.75rem;
      border: 2px solid #e1e8ed;
      border-radius: 8px;
      font-size: 1rem;
      transition: border-color 0.3s ease;
      background: white;
    }

    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: #3498db;
    }

    .form-group textarea {
      resize: vertical;
      min-height: 120px;
    }

    .checkbox-group {
      flex-direction: row;
      align-items: center;
      gap: 0.5rem;
    }

    .checkbox-group input[type="checkbox"] {
      width: auto;
      margin: 0;
    }

    .checkbox-group label {
      margin: 0;
      font-weight: 500;
    }

    .submit-button {
      background: #3498db;
      color: white;
      padding: 1rem 2rem;
      border: none;
      border-radius: 8px;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-top: 1rem;
    }

    .submit-button:hover:not(:disabled) {
      background: #2980b9;
      transform: translateY(-2px);
    }

    .submit-button:disabled {
      background: #bdc3c7;
      cursor: not-allowed;
    }

    /* Office Locations */
    .office-locations {
      background: #f8f9fa;
      padding: 4rem 0;
    }

    .locations-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }

    .location-card {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }

    .location-card:hover {
      transform: translateY(-5px);
    }

    .location-header {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .location-icon {
      font-size: 2rem;
    }

    .location-header h3 {
      color: #2c3e50;
      font-size: 1.3rem;
      font-weight: 600;
      margin: 0;
    }

    .location-details p {
      color: #34495e;
      line-height: 1.6;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
    }

    /* FAQ Section */
    .faq-section {
      background: white;
      padding: 4rem 0;
    }

    .faq-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .faq-item {
      background: #f8f9fa;
      padding: 2rem;
      border-radius: 12px;
      border-left: 4px solid #3498db;
    }

    .faq-item h3 {
      color: #2c3e50;
      font-size: 1.2rem;
      margin-bottom: 1rem;
      font-weight: 600;
    }

    .faq-item p {
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

      .contact-grid {
        grid-template-columns: 1fr;
      }

      .form-row {
        grid-template-columns: 1fr;
      }

      .locations-grid {
        grid-template-columns: 1fr;
      }

      .faq-grid {
        grid-template-columns: 1fr;
      }

      .cta-buttons {
        flex-direction: column;
        align-items: center;
      }

      .form-container {
        padding: 2rem;
      }
    }
  `]
})
export class ContactComponent {
  contactForm = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    newsletter: false
  };

  isSubmitting = false;

  onSubmit() {
    this.isSubmitting = true;

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', this.contactForm);
      this.isSubmitting = false;

      // Reset form
      this.contactForm = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
        newsletter: false
      };

      // Show success message (you can implement this as needed)
      alert('Thank you for your message! We will get back to you within 2 hours.');
    }, 2000);
  }
}
