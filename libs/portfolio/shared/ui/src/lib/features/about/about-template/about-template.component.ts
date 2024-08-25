import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionComponent } from '../description/description.component';
import { ExperienceComponent } from '../experience/experience.component';
import { EducationComponent } from '../education/education.component';
import { TechStackComponent } from '../tech-stack/tech-stack.component';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';
import { AboutTemplate } from './models/about-template.types';

@Component({
  selector: 'anx-about-template',
  standalone: true,
  imports: [
    CommonModule,
    DescriptionComponent,
    ExperienceComponent,
    EducationComponent,
    TechStackComponent,
    ContactDetailsComponent,
  ],
  templateUrl: './about-template.component.html',
  styleUrl: './about-template.component.scss',
})
export class AboutTemplateComponent {
  content = input.required<AboutTemplate>();
}
