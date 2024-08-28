// I'm testing this out to see if it works...
// My grasp on state management is fairly lacking...
// Using NGrx for state management

// Actions in ngrx, are just plain JS objects with a "type" property
// The type property is a string that describes the action
// Actions can also have a payload property that contains data
import { createAction, props } from '@ngrx/store';
import { Property } from '../../models/property.model';

export const loadProperties = createAction('[Property List] Load Properties');
export const loadPropertiesSuccess = createAction('[Property List] Load Properties Success', props<{ properties: Property[] }>());
export const loadPropertiesFailure = createAction('[Property List] Load Properties Failure', props<{ error: any }>());

export const addProperty = createAction('[Property List] Add Property', props<{ property: Property }>());
export const addPropertySuccess = createAction('[Property List] Add Property Success', props<{ property: Property }>());
export const addPropertyFailure = createAction('[Property List] Add Property Failure', props<{ error: any }>());
