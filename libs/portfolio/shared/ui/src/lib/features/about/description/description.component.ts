import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Description } from '../about-template/models/about-template.types';
import { HeaderComponent } from '@anx-shared-ng-portfolio';

@Component({
  selector: 'anx-description',
  standalone: true,
  imports: [CommonModule,HeaderComponent],
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss',
})
export class DescriptionComponent {
  content = input.required<Description>();
}

export const DescriptionMocks = {
  header: {
    title: `Software Developer (Angular & Frontend Technologies)`,
    description: `2+ Years of Experience`,
  },
  descriptions: [
    `Proficient in crafting dynamic and responsive user interfaces using Angular
  with state management via NgRx, adept at reactive programming with RxJS.
  Skilled in utilizing Bootstrap for layout and design, while ensuring semantic
  and accessible HTML, along with efficient and scalable CSS.`,
    `Strong JavaScript and TypeScript development skills, with experience in
  integrating designs from Figma into functional applications. Proficient in API
  testing and collaboration using Postman, with solid version control practices
  using Git, GitHub, and GitLab.`,
    `I foster open communication and teamwork, leveraging my technical proficiency
  in design tools and front-end development to challenges and learn
  continuously. I prioritize culture alongside product, believing a supportive
  and collaborative environment is key to success. I excel at tackling diverse
  design challenges and pushing boundaries. Always learning, I seek new
  experiences to improve.`,
  ],
};
