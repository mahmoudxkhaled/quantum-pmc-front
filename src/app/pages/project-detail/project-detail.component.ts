import { Component, OnInit, inject } from '@angular/core';
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
      "description": "Construction of a new medical center north of Jeddah, including medical, research, and academic buildings, admin, utility buildings, and infrastructure. Contract value: 3.7 billion SAR (~1 billion USD).",
      "responsibilities": [
        "Establishment of claims structure",
        "Management of claims preparation (prolongation costs, disruption, escalation of rates, etc.)"
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
      "description": "Construction of 2.0 km Sea Wall, 0.7 km Marina Wall, and dredging of lagoon within Al Reem Island.",
      "responsibilities": [
        "Planning",
        "Management of resources utilization",
        "EoT Claims"
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
      "description": "Bahrain Bay development with 432,000 m² island, mixed-use boulevard, residential towers, venues, hotel, and park. Infrastructure phase included 4 bridges, networks, pump stations, utilities. Value: 220 million QAR (~60 million USD).",
      "responsibilities": [
        "Planning",
        "Cost Control",
        "EoT Claims"
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
      "description": "Largest Aluminum Factory constructed worldwide in one phase, with a total value of 3.6 billion QAR.",
      "responsibilities": [
        "Planning and progress monitoring",
        "Scheduling for precast production facilities"
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
      "description": "Construction of new sea port at south of Doha, naval base, Qatar Economic Zone. Total value: 27 billion QAR (~7.4 billion USD).",
      "responsibilities": [
        "Planning and schedule management",
        "Delay and concurrency analysis",
        "Claims evaluation"
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
      "description": "Expansion with 16 new substations, extension of 5, and 23 HV/HV cable routes. Value: 1.8 billion QAR (~490 million USD).",
      "responsibilities": [
        "Planning team establishment",
        "Baseline preparation",
        "Progress monitoring, KPIs, resource control"
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
      "description": "One of KAHRAMAA's largest contracts: 28 new substations, extension of 21. Value: 3.2 billion QAR (~880 million USD).",
      "responsibilities": [
        "Planning team establishment",
        "Baseline preparation",
        "Progress monitoring, KPIs, resource control"
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
      "description": "Largest airport project in Oman, with new airfield, refurbishment, 45 new buildings, utilities, networks, bridges, and roads. Value: 450 million OMR (~1.2 billion USD).",
      "responsibilities": [
        "Project planning and scheduling",
        "Progress monitoring & KPIs",
        "Cost Control",
        "Time impact analysis",
        "Extension of time claims",
        "Disruption claims",
        "Support in arbitration"
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
      "description": "Expansion of Haram, 10+ years, multiple contracts, congested area. Overall value: ~200 billion SAR (~50 billion USD).",
      "responsibilities": [
        "Establishment of Cost Control department",
        "Preparation of budgets and cash flow analysis",
        "Preparation of schedules and funding plans",
        "Support in funding procedures with Ministry of Finance",
        "Project controls follow-up"
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
}
