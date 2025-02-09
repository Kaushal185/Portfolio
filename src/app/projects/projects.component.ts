import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../resume.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-projects',
  standalone: true, // Mark the component as standalone
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: any;

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.projects = this.resumeService.getResumeData().projects;
  }
}