import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';

interface ProjectData {
  id: string;
  title: string;
  location: string;
  client: string;
  company: string;
  scope: string;
  heroImage: string;
  description: string;
  responsibilities: string[];
  images: string[];
  relatedProjects: Array<{
    id: string;
    title: string;
  }>;
}

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private title = inject(Title);

  project: ProjectData | null = null;
  error: string | null = null;

  // Static project data - no HTTP needed
  private projectsData = {
    "king-faisal": {
      "id": "king-faisal",
      "title": "King Faisal Specialist Hospital and Research Center",
      "location": "Jeddah, KSA",
      "client": "King Faisal Specialist Hospital",
      "company": "Saudi Binladin Group (SBG)",
      "scope": "Main Contractor (EPC)",
      "heroImage": "assets/Images/king-faisal/king-faisal-main.jpg",
      "description": "The contract involved the construction of a new medical center north of Jeddah, including several medical buildings, research and academic buildings, an admin building, several utility buildings, and associated infrastructure. The contract's value was about 3.7 billion SARs (nearly 1 billion USDs).",
      "responsibilities": [
        "The establishment of the project's claims structure and the management of claims preparation, including prolongation costs claims, disruption claims, escalation of rates claims, and other work-related claims"
      ],
      "images": [
        "assets/Images/king-faisal/king-faisal-main.jpg",
        "assets/Images/king-faisal/king-faisal-2.jpg",
      ],
      "relatedProjects": [
        { "id": "qatalum", "title": "Qatar Aluminum Factory [Qatalum]" },
        { "id": "shams", "title": "Shams Abu Dhabi Marina & Sea Wall Project" },
        { "id": "samra", "title": "Samra 400kV Grid Station, Jordan" }
      ]
    },
    "samra": {
      "id": "samra",
      "title": "Samra 400kV Grid Station, Jordan",
      "location": "Hashimya, Jordan",
      "client": "Jordan Electrical Authority",
      "company": "VATech Reyrolle",
      "scope": "Main Contractor (EPC)",
      "heroImage": "assets/Images/samra/samra-main.jpg",
      "description": "Construction of a 400kV Grid Station in the Samra region, Jordan, with a total value of about 22 million USDs",
      "responsibilities": [
        "Planning, master schedule management, and resource management"
      ],
      "images": [
        // "assets/Images/samra.jpg"
      ],
      "relatedProjects": [
        { "id": "bahrain-bay", "title": "Bahrain Bay Development Project - Infrastructure Works" },
        { "id": "haram-expansion", "title": "Expansion of Haram (the Holy Mosque in Makkah)" },
        { "id": "shams", "title": "Shams Abu Dhabi Marina & Sea Wall Project" }
      ]
    },
    "shams": {
      "id": "shams",
      "title": "Shams Abu Dhabi Marina & Sea Wall Project",
      "location": "Abu Dhabi, UAE",
      "client": "Al-Reem Island",
      "company": "Athena Emirates LLC",
      "scope": "Contractor",
      "heroImage": "assets/Images/shams/shams-main.jpg",
      "description": "The project comprised the construction of a 2.0 km Sea Wall, a 0.7 km Marina Wall, and the dredging of a lagoon within Al Reem Island in Abu Dhabi.",
      "responsibilities": [
        "Planning, management of resource utilization, and EoT claims"
      ],
      "images": [
      ],
      "relatedProjects": [
        { "id": "qatalum", "title": "Qatar Aluminum Factory [Qatalum]" },
        { "id": "qatar-electrical-7", "title": "The Expansion of Qatar Electrical Network [Phase 7]" },
        { "id": "qatar-electrical-6", "title": "The Expansion of Qatar Electrical Network [Phase 6]" }
      ]
    },
    "bahrain-bay": {
      "id": "bahrain-bay",
      "title": "Bahrain Bay Development Project – Infrastructure Works",
      "location": "Manama, Bahrain",
      "client": "Bahrain Bay",
      "company": "Hill International",
      "scope": "PMC Services",
      "heroImage": "assets/Images/bahrain-bay/bahrain-bay-main.jpg",
      "description": "Bahrain Bay is a development project with a total size of 432,000 m2 consisting of an island connected to the mainland via causeways, with a mixed-use boulevard, a variety of buildings and amenities, including residential towers, cultural venues, an upscale hotel, and a verdant park. <br> <br> The project's infrastructure phase involved the construction of 4 bridges, MV substations, fire & potable water tanks and networks, a district cooling network, irrigation pump stations, as well as the construction of all road works. The infrastructure PMC contract value was about 220 million QARs (about 60 million USDs).",
      "responsibilities": [
        "Planning, cost control, and EoT claims"
      ],
      "images": [
        "assets/Images/bahrain-bay/bahrain-bay-1.jpg",
        "assets/Images/bahrain-bay/bahrain-bay-2.jpg",
      ],
      "relatedProjects": [
        { "id": "qatar-electrical-6", "title": "The Expansion of Qatar Electrical Network [Phase 6]" },
        { "id": "shams", "title": "Shams Abu Dhabi Marina & Sea Wall Project" },
        { "id": "hamad-port", "title": "Hamad Port Project, Doha, Qatar" }
      ]
    },
    "qatalum": {
      "id": "qatalum",
      "title": "Qatar Aluminum Factory [Qatalum]",
      "location": "Doha, Qatar",
      "client": "Qatar Aluminum [Qatalum]",
      "company": "Consolidated Contractors Company (CCC)",
      "scope": "Contractor",
      "heroImage": "assets/Images/qatalum/qatalum-main.jpg",
      "description": "The construction of Qatar Aluminum Factory (Qatalum), the largest aluminum factory constructed worldwide in one phase, with a total value of 3.5 billion QARs.",
      "responsibilities": [
        "Planning and progress monitoring, in addition to the detailed scheduling of resources & operations for the precast production facilities"
      ],
      "images": [
        "assets/Images/qatalum/qatalum-main.jpg",
        "assets/Images/qatalum/qatalum-2.jpg",
      ],
      "relatedProjects": [
        { "id": "muscat-airport", "title": "Development of Muscat International Airport Project" },
        { "id": "king-faisal", "title": "King Faisal Specialist Hospital and Research Center" },
        { "id": "haram-expansion", "title": "Expansion of Haram (the Holy Mosque in Makkah)" }
      ]
    },
    "hamad-port": {
      "id": "hamad-port",
      "title": "Hamad Port Project, Doha, Qatar",
      "location": "Doha, Qatar",
      "client": "Ministry of Transport",
      "company": "Ministry Project Team",
      "scope": "Client Support",
      "heroImage": "assets/Images/hamad-port/hamad-port-main.jpg",
      "description": "The project involved the construction of a new seaport south of Doha, with a new base for Qatari naval forces, and the construction of Qatar Economic Zone, spanning more than 26 square kilometers. The project's total value was 27 billion QARs (7.4 billion USDs).",
      "responsibilities": [
        "Planning and master schedule management, delay and concurrency analysis, and claims evaluation"
      ],
      "images": [
        "assets/Images/hamad-port/hamad-port-main.jpg",
        "assets/Images/hamad-port/hamad-port-2.jpg",
      ],
      "relatedProjects": [
        { "id": "shams", "title": "Shams Abu Dhabi Marina & Sea Wall Project" },
        { "id": "qatar-electrical-6", "title": "The Expansion of Qatar Electrical Network [Phase 6]" },
        { "id": "king-faisal", "title": "King Faisal Specialist Hospital and Research Center" }
      ]
    },
    "qatar-electrical-6": {
      "id": "qatar-electrical-6",
      "title": "The Expansion of Qatar Electrical Network [Phase 6]",
      "location": "Doha, Qatar",
      "client": "Qatar Electricity & Water Authority (Kahramaa)",
      "company": "Siemens PTD",
      "scope": "Main Contractor (EPC)",
      "heroImage": "assets/Images/qatar-electrical-6/qatar-electrical-6-main.jpg",
      "description": "Expanding the capacity of Qatar's electricity network through the construction of 15 new substations, the extension of 5 existing substations, and constructing 23 new HV/MV cable routes. The project's total value was 1.8 billion QARs (490 million USDs). The project's infrastructure phase involved the construction of 4 bridges, MV substations, fire & potable water tanks and networks, a district cooling network, irrigation pump stations, as well as the construction of all road works. The infrastructure PMC contract value was about 220 million QARs (about 60 million USDs).",
      "responsibilities": [
        "Planning team establishment, procedures, baseline preparation, progress monitoring, KPIs, and resource control"
      ],
      "images": [
        "assets/Images/qatar-electrical-6/qatar-electrical-6-1.jpg",
        "assets/Images/qatar-electrical-6/qatar-electrical-6-2.jpg",
        "assets/Images/qatar-electrical-6/qatar-electrical-6-3.jpg",
        "assets/Images/qatar-electrical-6/qatar-electrical-6-4.jpg",
        "assets/Images/qatar-electrical-6/qatar-electrical-6-5.jpg",
        "assets/Images/qatar-electrical-6/qatar-electrical-6-6.jpg",
        "assets/Images/qatar-electrical-6/qatar-electrical-6-7.jpg",
        "assets/Images/qatar-electrical-6/qatar-electrical-6-8.jpg",
        "assets/Images/qatar-electrical-6/qatar-electrical-6-9.jpg",

      ],
      "relatedProjects": [
        { "id": "samra", "title": "Samra 400kV Grid Station, Jordan" },
        { "id": "hamad-port", "title": "Hamad Port Project, Doha, Qatar" },
        { "id": "shams", "title": "Shams Abu Dhabi Marina & Sea Wall Project" }
      ]
    },
    "qatar-electrical-7": {
      "id": "qatar-electrical-7",
      "title": "The Expansion of Qatar Electrical Network [Phase 7]",
      "location": "Doha, Qatar",
      "client": "Qatar Electricity & Water Authority (Kahramaa)",
      "company": "Siemens PTD",
      "scope": "Main Contractor (EPC)",
      "heroImage": "assets/Images/qatar-electrical-7/qatar-electrical-7-main.jpg",
      "description": "One of the largest contracts ever awarded by KAHRAMAA (Qatar's general electricity & water corporation). The project comprised 28 new substations and the extension of 21 existing substations, with a total value of 3.2 billion QARs (about 880 million USDs).",
      "responsibilities": [
        "Planning team establishment, procedures, baseline preparation, progress monitoring, KPIs, and resource control"
      ],
      "images": [
        "assets/Images/qatar-electrical-7/qatar-electrical-7-1.jpg",
        "assets/Images/qatar-electrical-7/qatar-electrical-7-2.jpg",
        "assets/Images/qatar-electrical-7/qatar-electrical-7-3.jpg",
        "assets/Images/qatar-electrical-7/qatar-electrical-7-4.jpg",
        "assets/Images/qatar-electrical-7/qatar-electrical-7-5.jpg",
        "assets/Images/qatar-electrical-7/qatar-electrical-7-6.jpg",
      ],
      "relatedProjects": [
        { "id": "king-faisal", "title": "King Faisal Specialist Hospital and Research Center" },
        { "id": "hamad-port", "title": "Hamad Port Project, Doha, Qatar" },
        { "id": "qatar-electrical-6", "title": "The Expansion of Qatar Electrical Network [Phase 6]" }
      ]
    },
    "muscat-airport": {
      "id": "muscat-airport",
      "title": "Development of Muscat International Airport Project",
      "location": "Muscat, Oman",
      "client": "Ministry of Transportation",
      "company": "CCC/TAV Joint Venture",
      "scope": "Main Contractor (MC1)",
      "heroImage": "assets/Images/muscat-airport/muscat-airport-main.jpg",
      "description": "The Development of Muscat International Airport project was the largest airport project in Oman, providing an important gateway into the capital city of Muscat. MC1 works comprised the construction of a new airfield area (runway, taxiways, and aprons), refurbishment of an existing airfield, 43 new buildings (substations & utility buildings), several large utility networks (high voltage, medium voltage, and low voltage power networks, sewerage system, chilled water system, potable water network, fire fighting network, and fuel hydrant network), storm water drainage system, as well as a roads & bridges network (7 new bridges and about 30 roads from minor to highways). The contract's total value was 450 million OMR (about 1.2 billion USD).",
      "responsibilities": [
        "Project planning & master scheduling",
        "Progress monitoring & KPIs",
        "Cost control",
        "Variations and delay event recording, and time impact analysis",
        "Extension of time claims",
        "Disruption claims",
        "Support in the arbitration process and the preparation of related documents including witness statements"
      ],
      "images": [
        "assets/Images/muscat-airport/muscat-airport-2.jpg",
      ],
      "relatedProjects": [
        { "id": "samra", "title": "Samra 400kV Grid Station, Jordan" },
        { "id": "haram-expansion", "title": "Expansion of Haram (the Holy Mosque in Makkah)" },
        { "id": "bahrain-bay", "title": "Bahrain Bay Development Project - Infrastructure Works" }
      ]
    },
    "haram-expansion": {
      "id": "haram-expansion",
      "title": "Expansion of Haram (the Holy Mosque in Makkah)",
      "location": "Makkah, KSA",
      "client": "Ministry of Finance",
      "company": "Saudi Binladin Group (SBG)",
      "scope": "Main Contractor (EPC)",
      "heroImage": "assets/Images/haram-expansion/haram-expansion-main.jpg",
      "description": `The expansion of Haram comprised a large project portfolio and extended for more than 10 years, with massive complexity in the working environment within a live congested area and in the most holy Islamic place. The project portfolio was organized under several cost-plus contracts, and the overall value at completion was estimated to be nearly 200 billion SARs (more than 50 billion USDs). The key projects in Haram Expansion's portfolio were:`,
      "responsibilities": [
        "Establishment of Haramain Division's cost control department, including recruitment, development of cost breakdown structure, procedures, analysis, etc.",
        "Preparation of Haram projects' detailed budgets and cash flow analysis",
        "Preparation of cost-loaded schedules and funding plans",
        "Support in the establishment of funding procedures and disbursement mechanism with the Ministry of Finance, and full control for disbursement implementation",
        "Follow-up for other project controls functions"
      ],
      "images": [
        "assets/Images/haram-expansion/haram-expansion-1.jpg",
        "assets/Images/haram-expansion/haram-expansion-2.jpg",
        "assets/Images/haram-expansion/haram-expansion-3.jpg",
        "assets/Images/haram-expansion/haram-expansion-4.jpg",
        "assets/Images/haram-expansion/haram-expansion-5.jpg",
        "assets/Images/haram-expansion/haram-expansion-6.jpg",
        "assets/Images/haram-expansion/haram-expansion-7.jpg",
        "assets/Images/haram-expansion/haram-expansion-8.jpg",
        "assets/Images/haram-expansion/haram-expansion-9.jpg"
      ],
      "relatedProjects": [
        { "id": "shams", "title": "Shams Abu Dhabi Marina & Sea Wall Project" },
        { "id": "muscat-airport", "title": "Development of Muscat International Airport Project" },
        { "id": "bahrain-bay", "title": "Bahrain Bay Development Project - Infrastructure Works" }
      ]
    }
  };

  ngOnInit() {
    this.route.params.subscribe(params => {
      const projectId = params['id'];
      if (projectId) {
        this.loadProject(projectId);
        const project = this.projectsData[projectId as keyof typeof this.projectsData];
        if (project) {
          this.title.setTitle(`${project.title} | Quantum PMC`);
        }
      }
    });
  }

  private loadProject(projectId: string) {
    const project = this.projectsData[projectId as keyof typeof this.projectsData];
    if (project) {
      this.project = project;
      this.error = null;
    } else {
      this.error = `Project "${projectId}" not found.`;
      this.project = null;
    }
  }

  getProjectImage(projectId: string): string {
    const project = this.projectsData[projectId as keyof typeof this.projectsData];
    return project ? project.heroImage : '';
  }
}
