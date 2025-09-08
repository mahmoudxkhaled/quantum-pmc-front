import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BannerComponent } from '../../common/banner/banner.component';

@Component({
    selector: 'app-careers',
    standalone: true,
    imports: [CommonModule, RouterModule, FormsModule, BannerComponent],
    templateUrl: './careers.component.html',
    styleUrls: ['./careers.component.scss']
})
export class CareersComponent {
    constructor(private title: Title) {
        this.title.setTitle('Careers | Quantum PMC');
    }
    isSubmitting = false;

    formData = {
        position: '',
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        linkedin: ''
    };

    onSubmit(): void {
        if (this.isSubmitting) {
            return;
        }
        this.isSubmitting = true;

        setTimeout(() => {
            console.log('Careers application submitted:', this.formData);
            this.isSubmitting = false;
            alert('Thank you! Your application has been submitted.');
            this.formData = {
                position: '',
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
                linkedin: ''
            };
        }, 1200);
    }
}


