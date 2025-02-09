import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  getResumeData() {
    return {
      name: 'Kaushal Kawade',
      location: 'Pune, Maharashtra',
      contact: {
        phone: '7972856862',
        email: 'kawadekaushal183@gmail.com',
        linkedin: 'https://www.linkedin.com/in/kaushal-kawade/',
        github: 'https://github.com/Kaushal185',
      },
      education: [
        {
          institution: 'Pune Institute of Computer Technology',
          duration: 'Aug. 2019 -- May 2023',
          degree: 'Bachelor of Engineering in Electronics and Telecommunication',
          cgpa: 'CGPA: 8.8/10',
          location: 'Pune, Maharashtra',
        },
      ],
      experience: [
        {
          company: 'Oracle Financial Services Software',
          duration: 'July 2023 -- Present',
          role: 'Associate Consultant',
          location: 'Pune, Maharashtra',
          achievements: [
            'Built an Angular application for the National Bank of Egypt, increasing real-time transaction visibility by 15% and efficiently handling up to 10k transactions with a loading time of under 0.125 seconds.',
            'Enhanced the Message Translator application, improving SWIFT to XML (MT to MX) translation accuracy by 25%.',
            'Implemented a web portal allowing banks to download and upload data truncation and reconciliation reports, and monitor internal transaction lifecycles, significantly streamlining financial operations.',
          ],
        },
        {
          company: 'Ittiam Systems',
          duration: 'May 2022 -- August 2022',
          role: 'Software Developer Intern',
          location: 'Bengaluru, Karnataka',
          achievements: [
            'Developed high-performance convolutional and Turbo code encoders and decoders, improving computational efficiency by 40% compared to baseline implementations.',
            'Designed and implemented SIMD-optimized algorithms for encoding and decoding using Intel intrinsics, including SSE 4.1, AVX, and AVX2, achieving a 30% increase in data throughput.',
            'Processed over 1 TB of test data with consistent performance improvements.',
          ],
        },
      ],
      projects: [
        {
          title: 'Meeting App',
          technologies: 'Java, Spring Boot, WebRTC, WebSocket',
          description: 'Created a real-time video conferencing app supporting over 100 users, utilizing WebRTC for HD video and WebSocket for low-latency communication. Reduced server response time by 30% and secured session management with Spring Boot.',
          link: 'https://github.com/Kaushal185/Meeting-App',
        },
        {
          title: 'DigiBank',
          technologies: 'Spring-Boot, Angular, MySQL, Netlify',
          description: 'Created a full-stack digital banking application using Angular 15, Spring Boot, and MySQL, enabling real-time transactions, transaction history, and user authentication services.',
          link: 'https://github.com/Kaushal185/DigiBank',
        },
        {
          title: 'Microservices E-Commerce System',
          technologies: 'Apache Kafka, Spring Boot, Angular',
          description: 'Designed and prepared a scalable microservices framework leveraging Apache Kafka, resulting in a 40% increase in data throughput, enabling seamless integration across 10+ business-critical applications. Optimized message processing and reduced latency by implementing efficient Kafka consumers, resulting in a 20% improvement in data throughput.',
          link: 'https://drive.google.com/file/d/19dAMGGHHCoOqBUuBHS-cl-i87D5bbvai/view?usp=sharing',
        },
        {
          title: 'PhonePe Clone',
          technologies: 'Android, Java, Firebase',
          description: 'Developed a mobile payment application inspired by PhonePe, enabling users to perform secure and instant transactions using UPI. Added features like money transfer, bill payments, and transaction history with real-time updates using Firebase as the backend.',
          link: 'https://github.com/Kaushal185/PhonePayCloneAndroid',
        },
      ],
      skills: {
        languages: 'C, C++, Java, HTML, CSS, JavaScript, TypeScript, SQL',
        tools: 'VS Code, Git, GitHub, AWS, Jenkins, Linux, SQL Developer, Jira',
        frameworks: 'Angular, Spring, Spring-Boot, Android, Kafka, IBM-MQ',
        other: 'Data Structures, Algorithms, Agile Methodology, Microservices, CI/CD, Docker, Kubernetes, SDLC',
      },
      certificates: [
        'Learn Angular - O\'reilly',
        'Programming Foundations - Coursera',
        'GenAI For Everybody - Coursera',
        'Oracle Cloud Infrastructure',
      ],
      programmingProfile: {
        leetcode: 'https://leetcode.com/u/kaushal-kawade/',
        solvedProblems: 'More than 500 questions solved on LeetCode',
      },
    };
  }
}