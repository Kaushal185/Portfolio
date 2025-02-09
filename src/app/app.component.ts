import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { EducationComponent } from "./education/education.component";
import { ExperienceComponent } from "./experience/experience.component";
import { ProjectsComponent } from "./projects/projects.component";
import { SkillsComponent } from "./skills/skills.component";
import { MatToolbarModule } from '@angular/material/toolbar'; // ✅ Import MatToolbarModule
import { MatButtonModule } from '@angular/material/button'; // ✅ Import MatButtonModule
import { ResumeService } from './resume.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeaderComponent, EducationComponent, ExperienceComponent, ProjectsComponent, SkillsComponent,MatToolbarModule,MatButtonModule]
})
export class AppComponent implements AfterViewInit,OnInit {
  contactInfo: any;

  constructor(private resumeService: ResumeService) {}

  ngOnInit() {
    const resumeData = this.resumeService.getResumeData();
    this.contactInfo = resumeData.contact;
  }
  @ViewChild('home') home!: ElementRef;
  @ViewChild('education') education!: ElementRef;
  @ViewChild('experience') experience!: ElementRef;
  @ViewChild('projects') projects!: ElementRef;
  @ViewChild('skills') skills!: ElementRef;

  private sectionMap: { [key: string]: ElementRef } = {};

  ngAfterViewInit() {
    this.sectionMap = {
      home: this.home,
      education: this.education,
      experience: this.experience,
      projects: this.projects,
      skills: this.skills
    };
  }

  scrollToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      const navbarHeight = document.querySelector('.toolbar')?.clientHeight || 0;
      const offsetPosition = element.offsetTop - navbarHeight - 10; // Adjusted for better alignment
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
  
}
