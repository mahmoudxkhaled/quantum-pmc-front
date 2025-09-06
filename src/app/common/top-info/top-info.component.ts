import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-info.component.html',
  styleUrl: './top-info.component.scss'
})
export class TopInfoComponent {
  // Company information
  companyName: string = 'Quantum PMC LLC';
  companyAddress: string = 'Al-Ansab, PO Box: B3897-900 - Muscat, Sultanate of Oman';

  // Company contact information
  companyEmail: string = 'info@quantum-pmc.com';
  companyWhatsapp: string = '96891428180'; // Oman WhatsApp number without + sign
  companyWhatsappString: string = '+968 9142 8180'; // Display format

  // Social media links
  socialLinks = {
    facebook: 'https://www.facebook.com/quantumpmc',
    instagram: 'https://www.instagram.com/quantumpmc',
    twitter: 'https://www.twitter.com/quantumpmc',
    linkedin: 'https://www.linkedin.com/company/quantumpmc'
  };

  // Translation object
  translations = {
    email: 'Email',
    whatsapp: 'WhatsApp',
    contact_us: 'Contact Us',
    follow_us: 'Follow Us',
    company_name: 'Quantum PMC LLC'
  };
}