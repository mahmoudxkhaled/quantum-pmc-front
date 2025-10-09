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

    selectedFile: File | null = null;

    onFileChange(event: Event): void {
        const input = event.target as HTMLInputElement;
        this.selectedFile = (input.files && input.files.length > 0) ? input.files[0] : null;
    }

    onSubmit(careerForm: any): void {
        if (this.isSubmitting) {
            return;
        }
        this.isSubmitting = true;

        if (!this.selectedFile) {
            // Force validation message display
            careerForm.control.markAllAsTouched();
            this.isSubmitting = false;
            return;
        }

        const formDataToSend = new FormData();
        formDataToSend.append('position', this.formData.position);
        formDataToSend.append('name', this.formData.name);
        formDataToSend.append('email', this.formData.email);
        formDataToSend.append('phone', this.formData.phone);
        formDataToSend.append('subject', this.formData.subject);
        formDataToSend.append('message', this.formData.message);
        formDataToSend.append('linkedin', this.formData.linkedin);
        formDataToSend.append('file', this.selectedFile);

        this.apiService.submitCareerFormMultipart(formDataToSend).subscribe({
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
                this.selectedFile = null;
                const fileInputEl = (document.querySelector('input[name="file"]') as HTMLInputElement | null);
                if (fileInputEl) {
                    fileInputEl.value = '';
                }
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


