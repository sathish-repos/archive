import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAboutStaticData } from './actions/about.actions';
import { getHomeStaticData } from './actions/home.actions';
import {
  getAbout$,
  getAboutError$,
  getAboutLoaded$,
} from './selectors/about.selectors';
import {
  getHome$,
  getHomeError$,
  getHomeLoaded$,
} from './selectors/home.selectors';

@Injectable({ providedIn: 'root' })
export class PortfolioFacade {
  store = inject(Store);

  aboutStaticData$ = this.store.select(getAbout$);
  aboutLoaded$ = this.store.select(getAboutLoaded$);
  aboutError$ = this.store.select(getAboutError$);

  homeStaticData$ = this.store.select(getHome$);
  homeLoaded$ = this.store.select(getHomeLoaded$);
  homeError$ = this.store.select(getHomeError$);

  getAboutStaticData() {
    this.store.dispatch(getAboutStaticData());
  }

  getHomeStaticData() {
    this.store.dispatch(getHomeStaticData());
  }
}
