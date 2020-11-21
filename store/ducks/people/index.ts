import { Reducer } from 'redux';
import { PersonState, PeopleTypes } from './types';

const INITIAL_STATE: PersonState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<PersonState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PeopleTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case PeopleTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case PeopleTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    default:
      return state;
  }
};

export default reducer;