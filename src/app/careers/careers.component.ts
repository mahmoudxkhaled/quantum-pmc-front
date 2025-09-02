import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-careers',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="careers-content">
      <h1>Join Our Team</h1>
      <p>Build your career with Quantum PMC</p>
      <div class="careers-info">
        <p>We're always looking for talented professionals in project management, claims handling, and related fields.</p>
        <div class="positions">
          <h3>Open Positions</h3>
          <ul>
            <li>Senior Project Manager</li>
            <li>Claims Specialist</li>
            <li>Risk Analyst</li>
          </ul>
        </div>
      </div>
    </div>
  `,
    styles: [`
    .careers-content {
      text-align: center;
      padding: 2rem;
    }
    
    .careers-info {
      max-width: 800px;
      margin: 2rem auto;
      text-align: left;
    }
    
    .positions {
      margin-top: 2rem;
    }
    
    .positions ul {
      list-style: none;
      padding: 0;
    }
    
    .positions li {
      padding: 0.5rem 0;
      border-bottom: 1px solid #eee;
    }
  `]
})
export class CareersComponent { }
