import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Footer } from '../../models/nav-footer.types';

@Component({
  selector: 'anx-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  content = input.required<Footer>();
}
