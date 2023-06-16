import React, { useEffect } from 'react';
import { Router } from '../routes';
import { fetchCategories } from '../actions/asyncApi';
import { fetchLocales } from '../actions/async';

export const App = () => {
  useEffect(() => {
    const fetchDatas = async () => {
      // fetch all categories
      await fetchCategories();

      // fetch user locale settings
      await fetchLocales();
    };
    fetchDatas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Router />;
};
