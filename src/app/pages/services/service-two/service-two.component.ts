import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BannerComponent } from '../../../common/banner/banner.component';

@Component({
    selector: 'app-service-two',
    standalone: true,
    imports: [CommonModule, RouterModule, BannerComponent],
    templateUrl: './service-two.component.html',
    styleUrls: ['./service-two.component.scss']
})
export class ServiceTwoComponent { }
