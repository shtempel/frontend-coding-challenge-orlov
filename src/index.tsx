import React, { FC, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider, useDispatch } from 'react-redux';

import store from './store';
import { Container, H4, Tournaments, GlobalStyle, ToolBar } from 'components';
import { getTournaments } from 'thunk/tournaments';
import ErrorBoundary from './components/tournaments/ErrorBoundary';

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTournaments());
  }, [dispatch]);

  return (
    <Container>
      <H4>FACEIT Tournaments</H4>
      <ToolBar />
      <ErrorBoundary dispatch={dispatch}>
        <Tournaments />
      </ErrorBoundary>
    </Container>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root')
);
