import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Required for Angular directives
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true, // ✅ Standalone Component
  imports: [CommonModule, MatButtonModule, MatIconModule], // ✅ Correct imports
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  profileImage = 'assets/profile.png'; // ✅ Ensure this file exists in `assets/`

  aboutData = {
    name: 'Kaushal Kawade',
    tagline: 'Full Stack Developer | Tech Enthusiast | Problem Solver',
    description: `I am a passionate software engineer with expertise in Angular, 
                  Spring Boot, and full-stack development. I love building scalable 
                  applications and creating seamless user experiences.`,
    contact: {
      phone: '+91 7972856862',
      email: 'kawadekaushal183@gmail.com',
      linkedin: 'https://linkedin.com/in/johndoe',
      github: 'https://github.com/johndoe'
    }
  };
}
