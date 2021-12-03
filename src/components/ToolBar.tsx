import React, { ChangeEvent, FC } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash.debounce';

import { Button, Input } from 'components/shared';
import { setQuery } from 'actions/tournaments';
import { createTournament, getTournaments } from 'thunk/tournaments';
import { selectTournaments } from 'selectors/tournaments';

interface Props {
  className?: string;
}

const DEBOUNCE: number = 500;

const TOURNAMENT_EXIST: string = 'Tournament name shall be unique.';

const NEW_TOURNAMENT: string = 'New Tournament Name:';

const Component: FC<Props> = ({ className }) => {
  const dispatch = useDispatch();

  const tournaments = useSelector(selectTournaments);

  const debounced = debounce(() => dispatch(getTournaments()), DEBOUNCE);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(e.target.value));
    debounced();
  };

  const onCreateHandler = () => {
    const name = window.prompt(NEW_TOURNAMENT, '');
    if (name && !tournaments.some((tournament) => tournament.name === name)) {
      dispatch(createTournament(name));
    } else {
      window.alert(TOURNAMENT_EXIST);
    }
  };

  return (
    <div className={className}>
      <Input onChange={onChangeHandler} placeholder="Search tournament..." />
      <Button onClick={onCreateHandler}>create tournament</Button>
    </div>
  );
};

export const ToolBar = styled(Component)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  button {
    margin-right: 26px;
  }
`;
