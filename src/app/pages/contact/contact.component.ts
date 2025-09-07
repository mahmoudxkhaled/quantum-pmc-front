import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BannerComponent } from '../../common/banner/banner.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, BannerComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  isSubmitting = false;

  formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  onSubmit(): void {
    if (this.isSubmitting) {
      return;
    }
    this.isSubmitting = true;

    setTimeout(() => {
      console.log('Contact form submitted:', this.formData);
      this.isSubmitting = false;
      alert('Thank you! Your message has been sent.');
      this.formData = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      };
    }, 1200);
  }
}
