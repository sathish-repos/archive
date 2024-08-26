import { NgModule } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { portfolioReducer } from './reducers/portfolio.reducers';
import { provideEffects } from '@ngrx/effects';
import { AboutEffects } from './effects/about.effects';
import { HomeEffects } from './effects/home.effects';

@NgModule({
  providers: [
    provideStore({ portfolio: portfolioReducer }),
    provideEffects(AboutEffects, HomeEffects),
  ],
})
export class PortfolioStateModule {}
