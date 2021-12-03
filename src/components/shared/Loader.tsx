import React, { FC } from 'react';

interface Props {
  fallBackMessage: string;
}

export const Loader: FC<Props> = ({ fallBackMessage }) => (
  <span style={{ opacity: 0.7 }}>{fallBackMessage}</span>
);
