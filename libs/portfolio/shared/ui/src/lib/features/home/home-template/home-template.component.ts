import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero.component';
import { HomeTemplate } from './models/home-template.types';
import { HomeTemplateMocks } from './mocks/home-template.mocks';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'anx-home-template',
  standalone: true,
  imports: [CommonModule, HeroComponent, ProjectsComponent],
  templateUrl: './home-template.component.html',
  styleUrl: './home-template.component.scss',
})
export class HomeTemplateComponent {
  content = input<HomeTemplate>(HomeTemplateMocks);
}
