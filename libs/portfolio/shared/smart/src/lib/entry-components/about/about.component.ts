import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from '@anx/portfolio-shared-ui';

@Component({
  selector: 'anx-about',
  standalone: true,
  imports: [CommonModule, AboutPageComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
