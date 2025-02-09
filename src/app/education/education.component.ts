import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { ResumeService } from '../resume.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-education',
  standalone: true, // Mark the component as standalone
  imports: [CommonModule,RouterModule], // Add CommonModule here
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  education: any;

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.education = this.resumeService.getResumeData().education;
  }
}