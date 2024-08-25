import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechStack } from '../about-template/models/about-template.types';

@Component({
  selector: 'anx-tech-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss',
})
export class TechStackComponent {
  content = input.required<TechStack>();
}

export const TechStackMocks = {
  header: {
    title: 'Tech stack',
    description: 'Some of the technology stacks that i know of',
  },
  stacks: [
    'Front-End',
    'RxJs',
    'NgRX',
    'Bootstrap',
    'Figma',
    'PostMan',
    'Firebase',
    'Github',
  ],
};
