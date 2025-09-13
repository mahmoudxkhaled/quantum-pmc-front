import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BannerComponent } from '../../common/banner/banner.component';
import { ApiService, CareerFormData } from '../../services/api.service';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-careers',
    standalone: true,
    imports: [CommonModule, RouterModule, FormsModule, BannerComponent],
    templateUrl: './careers.component.html',
    styleUrls: ['./careers.component.scss']
})
export class CareersComponent {
    constructor(private title: Title, private apiService: ApiService, private messageService: MessageService) {
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

    onSubmit(careerForm: any): void {
        if (this.isSubmitting) {
            return;
        }
        this.isSubmitting = true;

        const formData: CareerFormData = {
            position: this.formData.position,
            name: this.formData.name,
            email: this.formData.email,
            phone: this.formData.phone,
            subject: this.formData.subject,
            message: this.formData.message,
            linkedin: this.formData.linkedin
        };

        this.apiService.submitCareerForm(formData).subscribe({
            next: (response) => {
                this.isSubmitting = false;
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Thank you! Your application has been submitted successfully.', life: 5000 });

                this.formData = {
                    position: '',
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: '',
                    linkedin: ''
                };

                careerForm.resetForm();
            },
            error: (error) => {
                this.isSubmitting = false;
                if (error.error && error.error.details) {
                    this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.details.join(', '), life: 5000 });
                } else {
                    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Sorry, there was an error submitting your application. Please try again.', life: 5000 });
                }
            }
        });
    }
}


