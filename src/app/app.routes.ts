import { Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { HeaderComponent } from './header/header.component';
import { provideRouter } from '@angular/router';
export const routes: Routes = [
    { path: 'home', component: HeaderComponent },
    { path: 'education', component: EducationComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'certificates', component: CertificatesComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' } // Redirect unknown paths to Home
];

export const appRoutingProviders = [provideRouter(routes)];