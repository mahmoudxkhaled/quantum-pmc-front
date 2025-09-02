import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

interface NavigationItem {
    label: string;
    route?: string;
    hasDropdown?: boolean;
    dropdownItems?: NavigationItem[];
}

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterLinkActive],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
    protected readonly navigationItems = signal<NavigationItem[]>([
        { label: 'Home', route: '/' },
        { label: 'About Us', route: '/about' },
        {
            label: 'Services',
            hasDropdown: true,
            dropdownItems: [
                { label: 'Project Management', route: '/services/project-management' },
                { label: 'Claims Management', route: '/services/claims-management' }
            ]
        },
        { label: 'Projects', route: '/projects' },
        { label: 'Careers', route: '/careers' },
        { label: 'Contact Us', route: '/contact' }
    ]);


    protected readonly companyName = signal('Quantum');
    protected readonly companyTagline = signal('PROJECT MANAGEMENT & CLAIMS SERVICES');
}
