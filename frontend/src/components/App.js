import React from 'react';
import { Router } from '../routes';
import { FetchInitialState } from '../utils/fetchInitialState';

export const App = () => {
  FetchInitialState();
  return <Router />;
};
