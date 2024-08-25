import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Education } from '../about-template/models/about-template.types';
import { HeaderComponent } from '@anx-shared-ng-portfolio';

@Component({
  selector: 'anx-education',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  content = input.required<Education>();
}

export const EducationMocks = {
  header: {
    title: 'Education',
    description: 'My educational qualifications',
  },
  schools: [
    {
      education: `B.E Computer Science and Engineering`,
      name: `From: TCET`,
      year: '2017-2021',
      score: `76.5%`,
    },
    {
      education: `Higher Sec School`,
      name: `From: Govt. Hrs School`,
      year: '2015-2017',
      score: `87.25%`,
    },
    {
      education: `High School`,
      name: `From: Govt. High School`,
      year: '2015-2017',
      score: `76.6%`,
    },
  ],
};
