import { action } from 'typesafe-actions';
import { PeopleTypes, Person } from './types';

export const loadRequest = () => action(PeopleTypes.LOAD_REQUEST);

export const loadSuccess = (data: Person[]) => action(PeopleTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(PeopleTypes.LOAD_FAILURE);