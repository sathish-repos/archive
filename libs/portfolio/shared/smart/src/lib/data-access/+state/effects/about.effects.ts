import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from '../../services/api.service';
import {
  getAboutStaticData,
  getAboutStaticDataError,
  getAboutStaticDataSuccess,
} from '../actions/about.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { About } from '../../model/about.types';

@Injectable()
export class AboutEffects {
  actions$ = inject(Actions);
  service = inject(ApiService);

  aboutEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAboutStaticData),
      switchMap(() =>
        this.service.getAboutPageStaticData().pipe(
          map((about: About) => {
            if (about) {
              return getAboutStaticDataSuccess({ about });
            } else {
              return getAboutStaticDataError({ error: about });
            }
          }),
          catchError((error) => of(getAboutStaticDataError({ error })))
        )
      )
    )
  );
}
