import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderFooterMocks, NavComponent } from '@anx-shared-ng-portfolio';

@Component({
  standalone: true,
  imports: [RouterModule, NavComponent],
  selector: 'anx-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'sathishkumar.dev';
  content = signal(HeaderFooterMocks);
}
