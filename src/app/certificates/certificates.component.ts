import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../resume.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-certificates',
  standalone: true, // Mark the component as standalone
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css'],
})
export class CertificatesComponent implements OnInit {
  certificates: any;

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.certificates = this.resumeService.getResumeData().certificates;
  }
}