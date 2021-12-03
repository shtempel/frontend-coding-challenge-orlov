import { TournamentsState } from './types';
import {
  SET_IS_LOADING,
  SET_QUERY,
  SET_TOURNAMENTS,
  TournamentsActions
} from 'actions/types';

const initialState: TournamentsState = {
  items: [],
  isLoading: false,
  query: ''
};

const reducer = (
  state: TournamentsState = initialState,
  action: TournamentsActions
) => {
  switch (action.type) {
    case SET_TOURNAMENTS:
      return { ...state, items: action.payload.tournaments };

    case SET_IS_LOADING:
      return { ...state, isLoading: action.payload.isLoading };

    case SET_QUERY:
      return { ...state, query: action.payload.query };

    default:
      return state;
  }
};

export default reducer;
