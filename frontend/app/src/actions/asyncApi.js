import { useStore } from '../store';
import { filterProducts } from '../utils/filterProducts';

const addError = useStore.getState().addError;
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3333';

export const fetchCategories = async () => {
  const url = `${API_URL}/categories/all`;
  try {
    const response = await fetch(url);
    useStore.setState({ categories: await response.json() });
  } catch (error) {
    addError({ title: error.message, description: url });
  }
};

export const fetchProducts = async (filters = {}) => {
  let data;
  let url = `${API_URL}/products/all`;
  try {
    if (filters?.product) {
      url = `${API_URL}/products/${filters.product}`;
    } else if (filters?.category) {
      url = `${API_URL}/categories/${filters.category}`;
    }
    const response = await fetch(url);
    data = await response.json();

    if (filters?.category) data = data.data;

    // useStore.setState({ products: filterProducts(data, filters) });
    useStore.setState({ products: data });
  } catch (error) {
    addError({ title: error.message, description: url });
  }
};
