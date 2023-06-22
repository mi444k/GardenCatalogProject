import { useStore } from '../store';

export const fetchLocales = async () => {
  const addError = useStore.getState().addError;
  const url = 'https://ipapi.co/json/';

  try {
    const response = await fetch(url);
    const data = await response.json();
    useStore.setState({ locales: data });
  } catch (error) {
    return addError({ title: error.message, description: url });
  }
};
