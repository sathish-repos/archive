import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  FooterComponent,
  HeaderFooter,
  HostNames,
  NavComponent,
} from '@anx-shared-ng-portfolio';
import { ApiService } from '@anx/portfolio-shared-smart';

@Component({
  standalone: true,
  imports: [RouterModule, NavComponent, FooterComponent],
  selector: 'anx-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private apiService: ApiService) {
    this.apiService.user.set(HostNames.SATHISHKUMAR);
    this.content.set(
      this.apiService.getHeaderFooterStaticData(HostNames.SATHISHKUMAR)
    );
  }

  content = signal<HeaderFooter>({} as HeaderFooter);
}
