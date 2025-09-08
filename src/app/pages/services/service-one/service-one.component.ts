import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BannerComponent } from '../../../common/banner/banner.component';

@Component({
  selector: 'app-service-one',
  standalone: true,
  imports: [CommonModule, RouterModule, BannerComponent],
  templateUrl: './service-one.component.html',
  styleUrls: ['./service-one.component.scss']
})
export class ServiceOneComponent {
  constructor(private title: Title) {
    this.title.setTitle('Project Management Services | Quantum PMC');
  }
}
