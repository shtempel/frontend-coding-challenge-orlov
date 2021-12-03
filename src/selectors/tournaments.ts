import { createSelector } from 'reselect';

import { RootState } from 'reducers';

const tournaments = (state: RootState) => state.tournaments;

export const selectTournaments = createSelector(
  tournaments,
  (tournaments) => tournaments.items
);

export const selectIsLoading = createSelector(
  tournaments,
  (tournaments) => tournaments.isLoading
);

export const selectQuery = createSelector(
  tournaments,
  (tournaments) => tournaments.query
);
