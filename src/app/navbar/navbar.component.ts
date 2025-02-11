import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-navbar',
  standalone: true, // ✅ Standalone component
  imports: [CommonModule, MatToolbarModule, MatButtonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {
  contactInfo: any;
  menuOpen = false; // ✅ Mobile menu toggle state

  @ViewChild('home', { static: false }) home!: ElementRef;
  @ViewChild('education', { static: false }) education!: ElementRef;
  @ViewChild('experience', { static: false }) experience!: ElementRef;
  @ViewChild('projects', { static: false }) projects!: ElementRef;
  @ViewChild('skills', { static: false }) skills!: ElementRef;

  private sectionMap: { [key: string]: ElementRef } = {};

  constructor(private resumeService: ResumeService) {}

  ngOnInit() {
    const resumeData = this.resumeService.getResumeData();
    this.contactInfo = resumeData.contact;
  }

  ngAfterViewInit() {
    this.sectionMap = {
      home: this.home,
      education: this.education,
      experience: this.experience,
      projects: this.projects,
      skills: this.skills
    };
  }

  /** ✅ Smooth Scroll to Section with Navbar Offset */
  scrollToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      const navbarHeight = document.querySelector('.toolbar')?.clientHeight || 0;
      const offsetPosition = element.offsetTop - navbarHeight - 10;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      this.menuOpen = false; // ✅ Close mobile menu after click
    }
  }

  /** ✅ Toggle Mobile Menu */
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
