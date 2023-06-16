import { useStore } from '../store';
import { filterProducts } from '../utils/filterProducts';
const addError = useStore.getState().addError;

export const fetchCategories = async () => {
  const url = 'http://localhost:3333/categories/all';
  try {
    const response = await fetch(url);
    useStore.setState({ categories: await response.json() });
  } catch (error) {
    addError({ title: error.message, description: url });
  }
};

export const fetchProducts = async (filters = {}) => {
  let data;
  let url = `http://localhost:3333/products/all`;
  try {
    if (filters?.product) {
      url = `http://localhost:3333/products/${filters.product}`;
      const response = await fetch(url);
      data = await response.json();
    } else if (filters?.category) {
      url = `http://localhost:3333/categories/${filters.category}`;
      const response = await fetch(url);
      data = await response.json();
      data = data.data;
    } else {
      const response = await fetch(url);
      data = await response.json();
    }
    useStore.setState({ products: filterProducts(data, filters) });
  } catch (error) {
    addError({ title: error.message, description: url });
  }
};
