import { createReducer, on } from '@ngrx/store';
import { Property } from '../../models/property.model';
import * as PropertyActions from '../actions/property.actions';

// Reducers are actions that can change the state of the application
// They take 2 args: the current state and an action (what was dispatched)
// the 2nd arg indicates what the new state should be
export interface PropertyState {
  properties: Property[];
  error: any;
}

export const initialState: PropertyState = {
  properties: [],
  error: null
};

export const propertyReducer = createReducer(
  initialState,
  on(PropertyActions.loadPropertiesSuccess, (state, { properties }) => ({
    ...state,
    properties
  })),
  on(PropertyActions.loadPropertiesFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(PropertyActions.addPropertySuccess, (state, { property }) => ({
    ...state,
    properties: [...state.properties, property]
  })),
  on(PropertyActions.addPropertyFailure, (state, { error }) => ({
    ...state,
    error
  }))
);
