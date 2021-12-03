import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import theme from 'theme';
import {
  TournamentsResponseItem,
  UpdateTournamentPayload
} from 'services/types';
import { Button, H6, Body } from 'components/shared';
import { deleteTournament, updateTournament } from 'thunk/tournaments';

interface Props {
  tournament: TournamentsResponseItem;
  className?: string;
}

const DELETE_CONFIRM: string = 'Do you really want to delete this tournament?';
const NEW_TITLE: string = 'New Tournament Name:';

const Component: FC<Props> = (props) => {
  const dispatch = useDispatch();
  const { className, tournament } = props;
  const { id, name, organizer, participants, startDate, game } = tournament;
  const { current, max } = participants;

  const getButton = (title: string): ReactNode => {
    const onDeleteHandler = () =>
      window.confirm(DELETE_CONFIRM) && dispatch(deleteTournament(id));

    const onEditHandler = () => {
      const data: UpdateTournamentPayload = {
        name: window.prompt(NEW_TITLE, name) || name
      };

      if (data && data.name !== name) dispatch(updateTournament(id, data));
    };

    const onClickHandler = () =>
      title === 'delete' ? onDeleteHandler() : onEditHandler();

    return (
      <Button onClick={onClickHandler} className="button">
        {title}
      </Button>
    );
  };

  const start = new Date(startDate).toLocaleDateString('en-GB', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  });

  return (
    <div className={className}>
      <div className="header">
        <H6>{tournament.name}</H6>
      </div>
      <div className="description">
        <Body>Organizer: {organizer}</Body>
        <Body>Game: {game}</Body>
        <Body>Participants: {`${current}/${max}`}</Body>
        <Body>Start: {start}</Body>
      </div>
      <div className="footer">
        {getButton('edit')}
        {getButton('delete')}
      </div>
    </div>
  );
};

export const TournamentTile = styled(Component)`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: ${theme.palette.background.base};
  border-radius: ${theme.borderRadius};
  margin: ${theme.listMargin};
  width: 275px;

  .description {
    display: flex;
    flex-direction: column;

    span {
      opacity: 0.7;
    }
  }

  .footer {
    margin-top: 8px;

    .button:first-child {
      margin-right: 8px;
    }
  }
`;
