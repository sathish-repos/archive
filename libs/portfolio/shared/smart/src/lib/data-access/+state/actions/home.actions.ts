import { createAction, props } from '@ngrx/store';
import { Home } from '../../model/home.types';

export const getHomeStaticData = createAction(
  '[home] get home page static data'
);

export const getHomeStaticDataSuccess = createAction(
  '[home] get home page static data success',
  props<{ home: Home }>()
);

export const getHomeStaticDataError = createAction(
  '[home] get home page static data Error',
  props<{ error: Error }>()
);
