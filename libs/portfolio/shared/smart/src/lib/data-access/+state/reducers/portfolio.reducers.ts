import { createReducer, on } from '@ngrx/store';
import { portfolioInitialStateMocks } from '../../mocks/portfolio.state.mocks';
import {
  getHomeStaticData,
  getHomeStaticDataSuccess,
  getHomeStaticDataError,
} from '../actions/home.actions';
import {
  getAboutStaticData,
  getAboutStaticDataError,
  getAboutStaticDataSuccess,
} from '../actions/about.actions';

export const portfolioReducer = createReducer(
  portfolioInitialStateMocks,
  on(getHomeStaticData, (state) => ({
    ...state,
    home: { ...state.home, loaded: false },
  })),
  on(getHomeStaticDataSuccess, (state, { home }) => ({
    ...state,
    home: { ...state.home, data: home, loaded: true },
  })),
  on(getHomeStaticDataError, (state, { error }) => ({
    ...state,
    home: { ...state.home, error, loaded: false },
  })),

  on(getAboutStaticData, (state) => ({
    ...state,
    about: { ...state.about, loaded: false },
  })),
  on(getAboutStaticDataSuccess, (state, { about }) => ({
    ...state,
    about: { ...state.about, data: about, loaded: true },
  })),
  on(getAboutStaticDataError, (state, { error }) => ({
    ...state,
    about: { ...state.about, error, loaded: false },
  }))
);
