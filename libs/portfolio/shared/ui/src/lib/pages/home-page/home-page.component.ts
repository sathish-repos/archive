import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTemplateComponent } from '../../features/home/home-template/home-template.component';

@Component({
  selector: 'anx-home-page',
  standalone: true,
  imports: [CommonModule, HomeTemplateComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
