import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: any;

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.skills = this.resumeService.getResumeData().skills;
  }
}