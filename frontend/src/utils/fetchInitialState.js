import { useEffect } from 'react';
import { useStore } from '../store';

export const FetchInitialState = () => {
  const store = useStore();

  useEffect(() => {
    const fetchDatas = async () => {
      // fetch all categories
      await store.fetchCategories();

      // fetch user locale settings
      await store.fetchLocale();
    };
    fetchDatas().catch(console.error);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
};
