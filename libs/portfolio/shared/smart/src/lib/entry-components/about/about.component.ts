import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from '@anx/portfolio-shared-ui';
import { PortfolioFacade } from '../../data-access/+state/portfolio.facade';

@Component({
  selector: 'anx-about',
  standalone: true,
  imports: [CommonModule, AboutPageComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  facade = inject(PortfolioFacade);

  content$ = this.facade.aboutStaticData$;
  loaded$ = this.facade.aboutLoaded$;
  error$ = this.facade.aboutError$;

  ngOnInit(): void {
    this.facade.getAboutStaticData();
  }
}
