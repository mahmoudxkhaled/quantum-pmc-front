import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
    // Company information
    companyName: string = 'Quantum PMC';
    companyTagline: string = 'PROJECT MANAGEMENT<br> & CLAIMS SERVICES';
    companyAddress: string = 'Al-Ansab, PO Box: B3897-900 - Muscat, Sultanate of Oman';
    companyDescription: string = 'With more than 20 years of experience in the construction industry within the middle east, our team have developed a diverse experience and knowledge of the region\'s needs and challenges with respect to complex construction projects management and disputes handling up to resolution.';

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

    // Current year for copyright
    currentYear: number = new Date().getFullYear();
}
