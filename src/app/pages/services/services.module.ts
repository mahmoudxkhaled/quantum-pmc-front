import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services.component';

const routes: Routes = [
    { path: '', component: ServicesComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ServicesComponent
    ]
})
export class ServicesModule { }
