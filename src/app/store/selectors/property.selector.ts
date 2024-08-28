// Selectors are functions in ngrx tat can extract data from the store

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PropertyState } from '../reducers/property.reducer';

export const selectPropertyState = createFeatureSelector<PropertyState>('property');

export const selectAllProperties = createSelector(
  selectPropertyState,
  (state: PropertyState) => state.properties
);

export const selectPropertyError = createSelector(
  selectPropertyState,
  (state: PropertyState) => state.error
);

export const selectPropertyById = (propertyId: string) => createSelector(
  selectAllProperties,
  (properties) => properties.find(property => property.id === propertyId)
);