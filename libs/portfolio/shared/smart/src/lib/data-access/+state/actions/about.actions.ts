import { createAction, props } from '@ngrx/store';
import { About } from '../../model/about.types';

export const getAboutStaticData = createAction(
  '[About] get about page static data'
);

export const getAboutStaticDataSuccess = createAction(
  '[About] get about page static data success',
  props<{ about: About }>()
);

export const getAboutStaticDataError = createAction(
  '[About] get about page static data Error',
  props<{ error: Error }>()
);
