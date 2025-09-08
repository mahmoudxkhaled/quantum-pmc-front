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
      "heroImage": "assets/Images/king-faisal-1.jpg",
      "description": "The Contract involved the construction of a new medical center north of Jeddah, including few medical buildings, research and academic buildings, admin building, few utility buildings, and associated infrastructure. The contract’s value was about 3.7 billion SARs (nearly 1 billion USDs).",
      "responsibilities": [
        "The establishment of the Project’s claims structure, and the management of claims preparation, including prolongation costs claim, disruption claim, escalation of rates claim, and other work-related claims"
      ],
      "images": [
        "assets/Images/king-faisal-1.jpg",
        "assets/Images/king-faisal-2.jpg",
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
      "heroImage": "assets/Images/Samra.jpg",
      "description": "Construction of 400kV Grid Station in Samra region, Jordan, with a total value of about 22 million USDs",
      "responsibilities": [
        "Planning, master schedule management, and resources management"
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
      "heroImage": "assets/Images/Shams.jpg",
      "description": "The project was comprised of the construction of a 2.0 km Sea Wall, a 0.7 km Marina Wall and the dredging of a lagoon within Al Reem Island in Abu Dhabi.",
      "responsibilities": [
        "Planning, management of resources utilization, and EoT Claims"
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
      "heroImage": "assets/Images/Bahrain-hero.jpg",
      "description": "Bahrain Bay is a development project with a total size of 432,000 m2 consisting of an island connected to the mainland via causeways, with mixed-use boulevard, a variety of buildings and amenities, including residential towers, cultural venues, an upscale hotel, and a verdant park. <br> <br> The project’s infrastructure phase involved the construction of 4 bridges, MV substations, fire & potable water tanks and networks, district cooling network, irrigation pump stations, as well as the construction of all road works. The infrastructure PMC contract value was about 220 million QARs (about 60 million USDs).",
      "responsibilities": [
        "Planning, Cost Control, and EoT Claims"
      ],
      "images": [
        "assets/Images/Bahrain-1.jpg",
        "assets/Images/Bahrain-2.jpg",
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
      "heroImage": "assets/Images/QAF-1.jpg",
      "description": "The construction of Qatar Aluminum Factory (Qatalum), the largest Aluminum Factory constructed worldwide in one phase, with a total value of 3.5 billion QARs.",
      "responsibilities": [
        "Planning and progress monitoring, in addition to the resources & operations detailed scheduling for the precast production facilities"
      ],
      "images": [
        "assets/Images/QAF-1.jpg",
        "assets/Images/QAF-2.jpg",
      ],
      "relatedProjects": [
        { "id": "muscat-airport", "title": "Development of Muscat International Airport Project" },
        { "id": "king-faisal", "title": "King Faisal Specialist Hospital and Research Center" },
        { "id": "haram", "title": "Expansion of Haram (the Holy Mosque in Makkah)" }
      ]
    },
    "hamad-port": {
      "id": "hamad-port",
      "title": "Hamad Port Project, Doha, Qatar",
      "location": "Doha, Qatar",
      "client": "Ministry of Transport",
      "company": "Ministry Project Team",
      "scope": "Client Support",
      "heroImage": "assets/Images/Hamad-1.jpg",
      "description": "The project involved the construction of a new sea port at the south of Doha, with a new base for Qatari naval forces, and the construction of Qatar Economic Zone, with a span of more than 26 square kilometers. The Project’s total value was 27 billion QARs (7.4 billion USDs).",
      "responsibilities": [
        "Planning and master schedule management, delay and concurrency analysis, and claims evaluation"
      ],
      "images": [
        "assets/Images/Hamad-1.jpg",
        "assets/Images/Hamad-2.jpg",
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
      "heroImage": "assets/Images/EQON6-hero.jpg",
      "description": "Expanding the capacity of Qatar’s electricity network through the construction of 15 new Substations, the extension of 5 existing Substations and constructing 23 new HV/MV cable routes. The Project’s total value was 1.8 billion QARs (490 million USDs). The project’s infrastructure phase involved the construction of 4 bridges, MV substations, fire & potable water tanks and networks, district cooling network, irrigation pump stations, as well as the construction of all road works. The infrastructure PMC contract value was about 220 million QARs (about 60 million USDs).",
      "responsibilities": [
        "Planning team establishment, procedures, baseline preparation, progress monitoring, KPIs and resources control"
      ],
      "images": [
        "assets/Images/EQON6-1.jpg",
        "assets/Images/EQON6-2.jpg",
        "assets/Images/EQON6-3.jpg",
        "assets/Images/EQON6-4.jpg",
        "assets/Images/EQON6-5.jpg",
        "assets/Images/EQON6-6.jpg",
        "assets/Images/EQON6-7.jpg",
        "assets/Images/EQON6-8.jpg",
        "assets/Images/EQON6-9.jpg",

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
      "heroImage": "assets/Images/EQON7-hero.jpg",
      "description": "One of the largest contracts ever awarded by KAHRAMAA (Qatar’s general electricity & water corporation). The Project was comprised of 28 new Substations and the extension of 21 existing Substations, with a total value of 3.2 billion QARs (about 880 M USDs).",
      "responsibilities": [
        "Planning team establishment, procedures, baseline preparation, progress monitoring, KPIs and resources control"
      ],
      "images": [
        "assets/Images/EQON7-1.jpg",
        "assets/Images/EQON7-2.jpg",
        "assets/Images/EQON7-3.jpg",
        "assets/Images/EQON7-4.jpg",
        "assets/Images/EQON7-5.jpg",
        "assets/Images/EQON7-6.jpg",
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
      "heroImage": "assets/Images/DOM-1.jpg",
      "description": "The Development of Muscat International Airport project was the largest airport project in Oman, providing an important gateway into the capital city of Muscat. MC1 works comprised of the construction of a new airfield area (runway, taxiways and aprons), refurbishment of an existing airfield, 43 new buildings (substations & utility buildings), several large utility networks (high voltage, medium voltage and low voltage power networks, sewerage system, chilled water system, potable water network, fire fighting network and fuel hydrant network), storm water drainage system, as well as a roads & bridges network (7 new bridges and about 30 roads from minor to highways). The contract’s total value was 450 million OMR (about 1.2 billion USD).",
      "responsibilities": [
        "Project Planning & master scheduling",
        "Progress Monitoring & KPIs",
        "Cost Control",
        "Variations and delay events recording, and time impact analysis",
        "Extension of time claims",
        "Disruption claims",
        "Support in the arbitration process and the preparation of related documents including witnesses statements"
      ],
      "images": [
        "assets/Images/DOM-2.jpg",
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
      "heroImage": "assets/Images/HE-Hero.jpg",
      "description": `The expansion of Haram was comprised of a large projects portfolio and extended for more than 10 years, with a massive complexity of working environment within a live congested area and in the most holy Islamic place. The projects portfolio was organized under several cost-plus contracts, and the overall value at completion was estimated to be nearly 200 billion SARs (more than 50 billion USDs). The key projects in Haram Expansion’s portfolio were:`,
      "responsibilities": [
        "Establishment of Haramain Division’s Cost Control department, including recruitment, development of cost breakdown structure, procedures, analysis … etc.",
        "Preparation of Haram projects’ detailed budgets and cash flow analysis",
        "Preparation of Cost Loaded Schedules, and funding plans",
        "Support in the establishment of a funding procedures and disbursement mechanism with the Ministry of Finance, and the full control for disbursement implementation",
        "Follow-up for other Project Controls functions"
      ],
      "images": [
        "assets/Images/HE-1.jpg",
        "assets/Images/HE-2.jpg",
        "assets/Images/HE-3.jpg",
        "assets/Images/HE-4.jpg",
        "assets/Images/HE-5.jpg",
        "assets/Images/HE-6.jpg",
        "assets/Images/HE-7.jpg",
        "assets/Images/HE-8.jpg",
        "assets/Images/HE-9.jpg"
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
