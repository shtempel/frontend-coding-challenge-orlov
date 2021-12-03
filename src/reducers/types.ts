import { TournamentsResponseItem } from 'services/types';

export interface TournamentsState {
  items: Array<TournamentsResponseItem>;
  isLoading: boolean;
  query: string;
}
