import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from '@anx/portfolio-shared-ui';
import { PortfolioFacade } from '../../data-access/+state/portfolio.facade';

@Component({
  selector: 'anx-home',
  standalone: true,
  imports: [CommonModule, HomePageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  facade = inject(PortfolioFacade);

  content$ = this.facade.homeStaticData$;
  loaded$ = this.facade.homeLoaded$;
  error$ = this.facade.homeError$;

  ngOnInit(): void {
    this.facade.getHomeStaticData();
  }
}
