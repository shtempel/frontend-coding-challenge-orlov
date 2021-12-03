import {
  SET_IS_LOADING,
  SET_QUERY,
  SET_TOURNAMENTS,
  TournamentsActions
} from './types';
import { TournamentsResponseItem } from 'services/types';

export const setTournaments = (
  tournaments: Array<TournamentsResponseItem>
): TournamentsActions => ({
  type: SET_TOURNAMENTS,
  payload: { tournaments }
});

export const setIsLoading = (isLoading: boolean): TournamentsActions => ({
  type: SET_IS_LOADING,
  payload: { isLoading }
});

export const setQuery = (query: string): TournamentsActions => ({
  type: SET_QUERY,
  payload: { query }
});
