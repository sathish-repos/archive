import { About } from './about.types';
import { Home } from './home.types';

export type HomeState = {
  data: Home;
  loaded: boolean;
  error?: Error;
};

export type AboutState = {
  data: About;
  loaded: boolean;
  error?: Error;
};

export type PortfolioState = {
  home: HomeState;
  about: AboutState;
};
