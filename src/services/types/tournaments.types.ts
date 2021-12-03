export type Api = string | undefined;

export interface TournamentsResponseItem {
  game: string;
  id: string;
  name: string;
  organizer: string;
  participants: {
    current: number;
    max: number;
  };
  startDate: string;
}

export interface TournamentsResponse {
  data: Array<TournamentsResponseItem>;
}

export interface TournamentResponse {
  data: TournamentsResponseItem;
}

export interface UpdateTournamentPayload {
  name?: string;
  organizer?: string;
  participants?: {
    current?: number;
    max?: number;
  };
  startDate?: string;
}

export interface CreateTournamentPayload {
  name: string;
}
