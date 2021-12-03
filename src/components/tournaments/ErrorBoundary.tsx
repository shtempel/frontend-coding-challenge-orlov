import React, { Component, CSSProperties, ErrorInfo, ReactNode } from 'react';
import { Button, Body } from 'components/shared';

import { getTournaments } from 'thunk/tournaments';
import { setQuery } from 'actions/tournaments';
import { Dispatch } from 'redux';

interface Props {
  dispatch: Dispatch<any>;
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

const styles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const ERROR_STRING: string = 'Something went wrong';
const UNCAUGHT: string = 'Uncaught error:';

class ErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(UNCAUGHT, error, errorInfo);
  }

  onClickHandler = () => {
    this.setState({ ...this.state, hasError: false });
    this.props.dispatch(setQuery(''));
    this.props.dispatch(getTournaments());
  };

  public render() {
    const { children } = this.props;
    const { hasError } = this.state;

    return hasError ? (
      <div style={styles}>
        <Body style={{ opacity: 0.7, marginBottom: 12 }}>{ERROR_STRING}</Body>
        <Button onClick={this.onClickHandler}>Retry</Button>
      </div>
    ) : (
      children
    );
  }
}

export default ErrorBoundary;
