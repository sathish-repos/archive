import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  NavComponent,
  FooterComponent,
  HostNames,
} from '@anx-shared-ng-portfolio';
import { ApiService } from '@anx/portfolio-shared-smart';
import { HeaderFooterMock } from './mocks/header-footer.mocks';

@Component({
  standalone: true,
  imports: [RouterModule, NavComponent, FooterComponent],
  selector: 'anx-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private apiService: ApiService) {
    this.apiService.user.set(HostNames.SUBHASHINI);
  }
  content = signal(HeaderFooterMock);
}
