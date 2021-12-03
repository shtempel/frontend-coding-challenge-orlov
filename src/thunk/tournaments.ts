import { Dispatch } from 'redux';

import { RootState } from 'reducers';
import { errorHandler } from 'utils';
import { tournamentsService } from 'services';
import { setIsLoading, setTournaments } from 'actions/tournaments';
import { UpdateTournamentPayload } from 'services/types';

export const getTournaments =
  () => async (dispatch: Dispatch, getState: () => RootState) => {
    try {
      dispatch(setIsLoading(true));
      const query = getState().tournaments.query;
      const tournaments = await tournamentsService.getTournaments(query);
      dispatch(setTournaments(tournaments));
      dispatch(setIsLoading(false));
    } catch (error) {
      errorHandler(error, 'getting the tournaments!');
      dispatch(setIsLoading(false));
    }
  };

export const createTournament =
  (name: string) => async (dispatch: Dispatch, getState: () => RootState) => {
    try {
      const tournament = await tournamentsService.createTournament(name);
      const tournaments = [tournament, ...getState().tournaments.items];
      dispatch(setTournaments(tournaments));
    } catch (error) {
      errorHandler(error, 'creating the tournaments!');
    }
  };

export const deleteTournament =
  (id: string) => async (dispatch: Dispatch, getState: () => RootState) => {
    try {
      await tournamentsService.deleteTournament(id);
      const tournaments = getState().tournaments.items.filter(
        (tournament) => tournament.id !== id
      );
      dispatch(setTournaments(tournaments));
    } catch (error) {
      errorHandler(error, 'deleting the tournament!');
    }
  };

export const updateTournament =
  (id: string, data: UpdateTournamentPayload) =>
  async (dispatch: Dispatch, getState: () => RootState) => {
    try {
      const response = await tournamentsService.updateTournament(id, data);
      const tournaments = getState().tournaments.items.map((tournament) =>
        tournament.id === id ? response : tournament
      );
      dispatch(setTournaments(tournaments));
    } catch (error) {
      errorHandler(error, 'updating the tournament!');
    }
  };
