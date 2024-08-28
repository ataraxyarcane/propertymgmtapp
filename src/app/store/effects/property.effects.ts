import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PropertyService } from '../../services/property.service';
import * as PropertyActions from '../actions/property.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

// Effects are functions that can dispatch actions to the store
// They take 1 arg: an observable of actions (double check this)
// The 1st arg indicates what the observable emits
@Injectable()
export class PropertyEffects {

  loadProperties$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PropertyActions.loadProperties),
      mergeMap(() => this.propertyService.getProperties()
        .pipe(
          map(properties => PropertyActions.loadPropertiesSuccess({ properties })),
          catchError(error => of(PropertyActions.loadPropertiesFailure({ error })))
        ))
    )
  );

  addProperty$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PropertyActions.addProperty),
      mergeMap(action => this.propertyService.addProperty(action.property)
        .pipe(
          map(property => PropertyActions.addPropertySuccess({ property })),
          catchError(error => of(PropertyActions.addPropertyFailure({ error })))
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private propertyService: PropertyService
  ) {}
}
