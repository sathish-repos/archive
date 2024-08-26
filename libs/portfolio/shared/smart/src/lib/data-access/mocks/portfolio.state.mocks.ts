import { About } from '../model/about.types';
import { Home } from '../model/home.types';
import {
  AboutState,
  HomeState,
  PortfolioState,
} from '../model/portfolio.state.types';
import { AboutMocks } from './about.mocks';
import { HomeMocks } from './home.mocks';

export const portFolioFeatureKey = 'portfolio';

export const AboutInitialStateMocks: AboutState = {
  data: {} as About,
  loaded: false,
};

export const HomeInitialStateMocks: HomeState = {
  data: {} as Home,
  loaded: false,
};

export const portfolioInitialStateMocks: PortfolioState = {
  about: AboutInitialStateMocks,
  home: HomeInitialStateMocks,
};

export const AboutStateMocks: AboutState = {
  data: AboutMocks,
  loaded: true,
};

export const HomeStateMocks: HomeState = {
  data: HomeMocks,
  loaded: true,
};

export const portfolioStateMocks: PortfolioState = {
  about: AboutStateMocks,
  home: HomeStateMocks,
};
