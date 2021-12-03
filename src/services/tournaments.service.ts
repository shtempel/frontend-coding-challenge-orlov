import axios from 'axios';

import {
  Api,
  TournamentResponse,
  TournamentsResponse,
  TournamentsResponseItem,
  UpdateTournamentPayload
} from './types';
import { API_TOURNAMENTS_URL } from 'constants/api';

class TournamentsService {
  constructor(private readonly tournamentsApi: Api) {
    this.tournamentsApi = tournamentsApi;
  }

  getTournaments = async (
    q: string
  ): Promise<Array<TournamentsResponseItem>> => {
    const response: TournamentsResponse = await axios.get(
      `${this.tournamentsApi}`,
      { params: { q } }
    );

    return response.data;
  };

  deleteTournament = async (id: string): Promise<void> =>
    axios.delete(`${this.tournamentsApi}/${id}`);

  createTournament = async (name: string): Promise<TournamentsResponseItem> => {
    const response: TournamentResponse = await axios.post(
      `${this.tournamentsApi}`,
      { name }
    );

    return response.data;
  };

  updateTournament = async (
    id: string,
    data: UpdateTournamentPayload
  ): Promise<TournamentsResponseItem> => {
    const response: TournamentResponse = await axios.patch(
      `${this.tournamentsApi}/${id}`,
      data
    );

    return response.data;
  };
}

const tournamentsService = new TournamentsService(API_TOURNAMENTS_URL);
export default tournamentsService;
