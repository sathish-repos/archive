import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './model/header.types';

@Component({
  selector: 'anx-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  content = input.required<Header>();
  titleClasses = input<string>('h4');
  descriptionClasses = input<string>('');
}
