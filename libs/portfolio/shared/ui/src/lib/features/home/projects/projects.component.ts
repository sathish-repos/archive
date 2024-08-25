import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Projects } from '../home-template/models/home-template.types';
import { HeaderComponent } from '@anx-shared-ng-portfolio';

@Component({
  selector: 'anx-projects',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  content = input.required<Projects>();
}
