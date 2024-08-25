import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from '../about-template/models/about-template.types';

@Component({
  selector: 'anx-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  content = input.required<Experience>();
}

export const ExperienceMocks = {
  header: {
    title: 'Work Experiences',
    description: 'some of the work that i have done',
  },
  highlights: {
    label: 'Project Highlights:',
  },
  experiences: [
    {
      position: 'System Engineer',
      at: '@TCS',
      year: '2022-Present',
      highlights: [
        `Led the development of a feature-rich e-commerce platform, enhancing user experience and increasing conversion rates by 20%.`,
        `Implemented a real-time analytics dashboard using Angular and NgRx, providing actionable insights and improving decision-making processes.`,
        `Collaborated on a cross-functional team to integrate multiple micro front-ends into a cohesive enterprise application, streamlining workflow efficiency.`,
      ],
    },
  ],
};
