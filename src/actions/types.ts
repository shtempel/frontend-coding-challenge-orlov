import { TournamentsResponseItem } from 'services/types';

export const SET_TOURNAMENTS = 'SET_TOURNAMENTS';
export const SET_IS_LOADING = 'SET_IS_LOADING';
export const SET_QUERY = 'SET_QUERY';

interface SetTournaments {
  type: typeof SET_TOURNAMENTS;
  payload: { tournaments: Array<TournamentsResponseItem> };
}

interface SetIsLoading {
  type: typeof SET_IS_LOADING;
  payload: { isLoading: boolean };
}

interface SetQuery {
  type: typeof SET_QUERY;
  payload: { query: string };
}

export type TournamentsActions = SetTournaments | SetIsLoading | SetQuery;
