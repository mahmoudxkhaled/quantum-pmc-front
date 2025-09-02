import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="contact-content">
      <h1>Contact Us</h1>
      <p>Get in touch with our team</p>
      <div class="contact-info">
        <div class="contact-details">
          <h3>Get In Touch</h3>
          <p>Email: info@quantumpmc.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Business Street, City, State 12345</p>
        </div>
        <div class="contact-form">
          <h3>Send us a Message</h3>
          <p>Contact form coming soon...</p>
        </div>
      </div>
    </div>
  `,
    styles: [`
    .contact-content {
      text-align: center;
      padding: 2rem;
    }
    
    .contact-info {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-top: 3rem;
      max-width: 1000px;
      margin-left: auto;
      margin-right: auto;
    }
    
    .contact-details, .contact-form {
      padding: 1.5rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      text-align: left;
    }
  `]
})
export class ContactComponent { }
