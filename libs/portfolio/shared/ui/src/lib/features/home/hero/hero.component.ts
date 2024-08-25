import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header, HeaderComponent } from '@anx-shared-ng-portfolio';

@Component({
  selector: 'anx-hero',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  content = input.required<Header>();
}
