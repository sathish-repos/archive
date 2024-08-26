import { createFeatureSelector, createSelector } from '@ngrx/store';
import { portFolioFeatureKey } from '../../mocks/portfolio.state.mocks';
import { PortfolioState } from '../../model/portfolio.state.types';
import { extractAboutStaticData } from '../../utils/adaptors/about.adaptors';
import { extractError } from '../../utils/adaptors/common.adaptors';

const FeatureSelector =
  createFeatureSelector<PortfolioState>(portFolioFeatureKey);

const AboutSelector = createSelector(FeatureSelector, (state) => state.about);

export const getAbout$ = createSelector(AboutSelector, (state) =>
  extractAboutStaticData(state)
);
export const getAboutLoaded$ = createSelector(
  AboutSelector,
  (state) => state.loaded
);
export const getAboutError$ = createSelector(AboutSelector, (state) =>
  extractError(state.error)
);
