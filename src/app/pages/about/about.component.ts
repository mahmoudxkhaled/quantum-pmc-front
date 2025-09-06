import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '../../common/banner/banner.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, BannerComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent { }
