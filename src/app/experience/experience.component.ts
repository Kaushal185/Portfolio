import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../resume.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-experience',
    standalone: true, // Mark the component as standalone
    imports: [CommonModule], // Add CommonModule here
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  experience: any;

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.experience = this.resumeService.getResumeData().experience;
  }
}