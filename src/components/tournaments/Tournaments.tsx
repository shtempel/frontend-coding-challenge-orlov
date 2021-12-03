import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { selectIsLoading, selectTournaments } from 'selectors/tournaments';
import { TournamentTile } from './TournamentTile';
import { Loader } from 'components/shared';

interface Props {
  className?: string;
}

const NO_TOURNAMENTS: string = 'No tournaments found.';
const FALL_BACK_MESSAGE = 'Loading Tournaments...';

const Component: FC<Props> = ({ className }) => {
  const isLoading = useSelector(selectIsLoading);
  const tournaments = useSelector(selectTournaments);

  const listNode: ReactNode = tournaments.length ? (
    tournaments.map((tournament) => (
      <TournamentTile key={tournament.id} tournament={tournament} />
    ))
  ) : (
    <span style={{ opacity: 0.7 }}>{NO_TOURNAMENTS}</span>
  );

  return (
    <div className={className}>
      {isLoading ? <Loader fallBackMessage={FALL_BACK_MESSAGE} /> : listNode}
    </div>
  );
};

export const Tournaments = styled(Component)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 16px;
  justify-content: center;
`;
