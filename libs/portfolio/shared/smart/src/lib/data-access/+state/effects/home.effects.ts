import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from '../../services/api.service';
import {
  getHomeStaticData,
  getHomeStaticDataError,
  getHomeStaticDataSuccess,
} from '../actions/home.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { Home } from '../../model/home.types';

@Injectable()
export class HomeEffects {
  actions$ = inject(Actions);
  service = inject(ApiService);

  homeEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getHomeStaticData),
      switchMap(() =>
        this.service.getHomePageStaticData().pipe(
          map((home: Home) => {
            if (home) {
              return getHomeStaticDataSuccess({ home });
            } else {
              return getHomeStaticDataError({ error: home });
            }
          }),
          catchError((error) => of(getHomeStaticDataError({ error })))
        )
      )
    )
  );
}
