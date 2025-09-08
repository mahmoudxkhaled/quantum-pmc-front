import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
  projects: ProjectListItem[] = [
    {
      id: 'haram-expansion',
      title: 'Expansion of Haram (the Holy Mosque in Makkah)',
      client: 'Ministry of Finance',
      company: 'Saudi Binladin Group (SBG)',
      scope: 'Main Contractor (EPC)',
      location: 'Makkah, Saudi Arabia',
      description: 'Sacred religious site expansion project involving complex architectural design, cultural sensitivity, and massive scale construction.',
      image: 'assets/Images/HL-Project-Photo-890x664.png',
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
      image: 'assets/Images/Layout-890x664.jpg',
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
      image: 'assets/Images/P7-TX2-890x664.jpg',
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
      image: 'assets/Images/P6-GIS-890x664.jpg',
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
      image: 'assets/Images/small-layout.jpg',
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
      image: 'assets/Images/external-photo-890x664.jpg',
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
      image: 'assets/Images/Master-Plan-890x620.png',
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
      image: 'assets/Images/Shams-Project-890x664.png',
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
      image: 'assets/Images/overall-layout.jpg',
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
      image: 'assets/Images/external-photo-890x664.jpg',
      tags: ['Healthcare', 'Hospital', 'Research']
    }
  ];
}
