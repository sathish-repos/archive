import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTemplateComponent } from '../../features/home/home-template/home-template.component';
import { HomeTemplate } from '../../features/home/home-template/models/home-template.types';

@Component({
  selector: 'anx-home-page',
  standalone: true,
  imports: [CommonModule, HomeTemplateComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  content = input.required<HomeTemplate>();
}
