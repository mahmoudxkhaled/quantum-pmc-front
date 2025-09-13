import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BannerComponent } from '../../common/banner/banner.component';
import { ApiService, ContactFormData } from '../../services/api.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, BannerComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(private title: Title, private apiService: ApiService, private messageService: MessageService) {
    this.title.setTitle('Contact | Quantum PMC');
  }
  isSubmitting = false;
  errorMessage = '';
  successMessage = '';

  formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  onSubmit(contactForm: any): void {
    if (this.isSubmitting) {
      return;
    }
    this.isSubmitting = true;
    this.errorMessage = '';
    this.successMessage = '';

    const formData: ContactFormData = {
      name: this.formData.name,
      email: this.formData.email,
      phone: this.formData.phone || undefined,
      subject: this.formData.subject || undefined,
      message: this.formData.message
    };

    this.apiService.submitContactForm(formData).subscribe({
      next: (response) => {
        this.isSubmitting = false;

        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Thank you! Your message has been sent successfully.', life: 5000 });

        // Reset form data
        this.formData = {
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        };

        // Reset form state to hide validation messages
        contactForm.resetForm();
      },
      error: (error) => {
        this.isSubmitting = false;
        if (error.error && error.error.details) {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.details.join(', '), life: 5000 });
        } else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Sorry, there was an error sending your message. Please try again.', life: 5000 });
        }
      }
    });
  }
}
