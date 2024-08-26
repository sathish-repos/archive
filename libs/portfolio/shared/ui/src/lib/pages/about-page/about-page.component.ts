import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutTemplateComponent } from '../../features/about/about-template/about-template.component';
import { AboutTemplate } from '../../features/about/about-template/models/about-template.types';

@Component({
  selector: 'anx-about-page',
  standalone: true,
  imports: [CommonModule, AboutTemplateComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss',
})
export class AboutPageComponent {
  content = input.required<AboutTemplate>();
}
