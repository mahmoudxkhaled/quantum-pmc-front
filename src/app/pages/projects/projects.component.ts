import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';

interface ProjectListItem {
  id: string;
  title: string;
  client: string;
  company: string;
  scope: string;
  location: string;
  description: string;
  image: string;
  tags: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  constructor(private title: Title) {
    this.title.setTitle('Projects | Quantum PMC');
  }
  projects: ProjectListItem[] = [
    {
      id: 'haram-expansion',
      title: 'Expansion of Haram (the Holy Mosque in Makkah)',
      client: 'Ministry of Finance',
      company: 'Saudi Binladin Group (SBG)',
      scope: 'Main Contractor (EPC)',
      location: 'Makkah, Saudi Arabia',
      description: 'Sacred religious site expansion project involving complex architectural design, cultural sensitivity, and massive scale construction.',
      image: 'assets/Images/haram-expansion/haram-expansion-project-890.png',
      tags: ['Religious', 'Cultural', 'Architecture']
    },
    {
      id: 'muscat-airport',
      title: 'Development of Muscat International Airport Project',
      client: 'Ministry of Transportation',
      company: 'CCC/TAV Joint Venture',
      scope: 'Main Contractor (MC1)',
      location: 'Muscat, Oman',
      description: 'Major airport expansion and modernization project including terminal buildings, runways, and supporting infrastructure.',
      image: 'assets/Images/muscat-airport/muscat-airport-layout.jpg',
      tags: ['Aviation', 'Infrastructure', 'Transportation']
    },
    {
      id: 'qatar-electrical-7',
      title: 'The Expansion of Qatar Electrical Network [Phase 7]',
      client: 'Qatar Electricity & Water Authority (Kahramaa)',
      company: 'Siemens PTD',
      scope: 'Main Contractor (EPC)',
      location: 'Doha, Qatar',
      description: 'National electrical grid expansion project including substations, transmission lines, and smart grid technology implementation.',
      image: 'assets/Images/qatar-electrical-7/qatar-electrical-7-tx2-890.jpg',
      tags: ['Power', 'Smart Grid', 'Infrastructure']
    },
    {
      id: 'qatar-electrical-6',
      title: 'The Expansion of Qatar Electrical Network [Phase 6]',
      client: 'Qatar Electricity & Water Authority (Kahramaa)',
      company: 'Siemens PTD',
      scope: 'Main Contractor (EPC)',
      location: 'Doha, Qatar',
      description: 'Advanced electrical network expansion with modern power distribution systems and renewable energy integration.',
      image: 'assets/Images/qatar-electrical-6/qatar-electrical-6-gis-890.jpg',
      tags: ['Power', 'Renewable', 'Distribution']
    },
    {
      id: 'hamad-port',
      title: 'Hamad Port Project, Doha, Qatar',
      client: 'Ministry of Transport',
      company: 'Ministry Project Team',
      scope: 'Client Support',
      location: 'Doha, Qatar',
      description: 'Major seaport development including container terminals, cargo handling facilities, and maritime infrastructure for international trade.',
      image: 'assets/Images/hamad-port/hamad-port-layout.jpg',
      tags: ['Maritime', 'Port', 'Trade']
    },
    {
      id: 'qatalum',
      title: 'Qatar Aluminum Factory [Qatalum]',
      client: 'Qatar Aluminum [Qatalum]',
      company: 'Consolidated Contractors Company (CCC)',
      scope: 'Contractor',
      location: 'Doha, Qatar',
      description: 'Large-scale industrial facility construction for aluminum production with advanced manufacturing processes and environmental controls.',
      image: 'assets/Images/qatalum/qatalum-external.jpg',
      tags: ['Industrial', 'Manufacturing', 'Aluminum']
    },
    {
      id: 'bahrain-bay',
      title: 'Bahrain Bay Development Project – Infrastructure Works',
      client: 'Bahrain Bay',
      company: 'Hill International',
      scope: 'PMC Services',
      location: 'Manama, Bahrain',
      description: 'Comprehensive urban development including roads, utilities, landscaping, and supporting infrastructure for a new waterfront district.',
      image: 'assets/Images/bahrain-bay/bahrain-bay-master-plan.png',
      tags: ['Urban', 'Infrastructure', 'Waterfront']
    },
    {
      id: 'shams',
      title: 'Shams Abu Dhabi Marina & Sea Wall Project',
      client: 'Al-Reem Island',
      company: 'Athena Emirates LLC',
      scope: 'Contractor',
      location: 'Abu Dhabi, UAE',
      description: 'Luxury marina development with sea wall protection, including berthing facilities, recreational areas, and coastal engineering works.',
      image: 'assets/Images/shams/shams-project-890.png',
      tags: ['Marina', 'Coastal', 'Luxury']
    },
    {
      id: 'samra',
      title: 'Samra 400kV Grid Station, Jordan',
      client: 'Jordan Electrical Authority',
      company: 'VATech Reyrolle',
      scope: 'Main Contractor (EPC)',
      location: 'Hashimya, Jordan',
      description: 'High-voltage electrical infrastructure project for the national power grid, involving complex engineering and construction management.',
      image: 'assets/Images/samra/samra-main.jpg',
      tags: ['Infrastructure', 'Electrical', 'Government']
    },
    {
      id: 'king-faisal',
      title: 'King Faisal Specialist Hospital and Research Center',
      client: 'King Faisal Specialist Hospital',
      company: 'Saudi Binladin Group (SBG)',
      scope: 'Main Contractor (EPC)',
      location: 'Jeddah, Saudi Arabia',
      description: 'State-of-the-art medical facility construction with advanced healthcare technology integration and specialized medical units.',
      image: 'assets/Images/king-faisal/king-faisal-main.jpg',
      tags: ['Healthcare', 'Hospital', 'Research']
    }
  ];
}
