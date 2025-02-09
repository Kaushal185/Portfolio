import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { EducationComponent } from "./education/education.component";
import { ExperienceComponent } from "./experience/experience.component";
import { ProjectsComponent } from "./projects/projects.component";
import { SkillsComponent } from "./skills/skills.component";
import { CertificatesComponent } from "./certificates/certificates.component";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, // Required for routing to work
    CommonModule, // Required for Angular directives (NgIf, NgFor)
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    EducationComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    CertificatesComponent,
    HeaderComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // ✅ Fixed `styleUrls`
})
export class AppComponent {
  title = 'portfolio';
}

