import { createFeatureSelector, createSelector } from '@ngrx/store';
import { portFolioFeatureKey } from '../../mocks/portfolio.state.mocks';
import { PortfolioState } from '../../model/portfolio.state.types';
import { extractError } from '../../utils/adaptors/common.adaptors';
import { extractHomeStaticData } from '../../utils/adaptors/home.adaptors';

const FeatureSelector =
  createFeatureSelector<PortfolioState>(portFolioFeatureKey);

const HomeState = createSelector(FeatureSelector, (state) => state.home);

export const getHome$ = createSelector(HomeState, (state) =>
  extractHomeStaticData(state)
);
export const getHomeLoaded$ = createSelector(
  HomeState,
  (state) => state.loaded
);
export const getHomeError$ = createSelector(HomeState, (state) =>
  extractError(state.error)
);
