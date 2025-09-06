
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @Input() title: string = '';
  @Input() description?: string = '';
  @Input() backgroundImage: string = 'assets/images/pattern/04.png';

  @Input() breadcrumbLabel1?: string = '';
  @Input() breadcrumbLink1?: string = '/';

  @Input() breadcrumbLabel2?: string = '';
  @Input() breadcrumbLink2?: string = '/';
}
