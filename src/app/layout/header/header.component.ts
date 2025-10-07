import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
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

    // Mobile menu state
    protected readonly isMobileMenuOpen = signal(false);
    protected readonly openDropdowns = signal<Set<string>>(new Set());

    constructor(private router: Router) { }

    protected readonly companyName = signal('Quantum PMC');
    protected readonly companyTagline = signal('PROJECT MANAGEMENT<br> & CLAIMS SERVICES');

    isServiceActive(item: NavigationItem): boolean {
        if (!item.hasDropdown || !item.dropdownItems) {
            return false;
        }

        const currentUrl = this.router.url;
        return item.dropdownItems.some(dropdownItem =>
            dropdownItem.route && currentUrl.startsWith(dropdownItem.route)
        );
    }

    toggleMobileMenu(): void {
        this.isMobileMenuOpen.update(open => !open);
        // Close all dropdowns when toggling mobile menu
        if (!this.isMobileMenuOpen()) {
            this.openDropdowns.set(new Set());
        }
    }

    closeMobileMenu(): void {
        this.isMobileMenuOpen.set(false);
        this.openDropdowns.set(new Set());
    }

    toggleDropdown(label: string): void {
        this.openDropdowns.update(dropdowns => {
            const newDropdowns = new Set(dropdowns);
            if (newDropdowns.has(label)) {
                newDropdowns.delete(label);
            } else {
                newDropdowns.add(label);
            }
            return newDropdowns;
        });
    }

    isDropdownOpen(label: string): boolean {
        return this.openDropdowns().has(label);
    }
}
