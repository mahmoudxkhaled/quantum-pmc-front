import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'about',
        loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
    },
    {
        path: 'services',
        loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent)
    },
    {
        path: 'services/project-management',
        loadComponent: () => import('./pages/services/service-one/service-one.component').then(m => m.ServiceOneComponent)
    },
    {
        path: 'services/claims-management',
        loadComponent: () => import('./pages/services/service-two/service-two.component').then(m => m.ServiceTwoComponent)
    },
    {
        path: 'projects',
        loadComponent: () => import('./pages/projects/projects.component').then(m => m.ProjectsComponent)
    },
    {
        path: 'projects/:id',
        loadComponent: () => import('./pages/projects/project-detail/project-detail.component').then(m => m.ProjectDetailComponent)
    },
    {
        path: 'careers',
        loadComponent: () => import('./pages/careers/careers.component').then(m => m.CareersComponent)
    },
    {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
    }
];
