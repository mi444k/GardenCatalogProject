import randomizeArray from './randomizeArray';

export const filterProducts = (products, filters) => {
  let result = [...products];

  if (filters?.discounted) {
    result = result.filter((el) => el.discont_price);
  }

  if (filters?.minPrice) {
    result = result.filter((el) => (el.discont_price ? el.discont_price : el.price) >= filters.minPrice);
  }

  if (filters?.maxPrice) {
    result = result.filter((el) => (el.discont_price ? el.discont_price : el.price) <= filters.maxPrice);
  }

  if (filters?.sorted === 'price') {
    result = result.sort((a, b) =>
      (a.discont_price ? a.discont_price : a.price) > (b.discont_price ? b.discont_price : b.price)
        ? 1
        : (b.discont_price ? b.discont_price : b.price) > (a.discont_price ? a.discont_price : a.price)
        ? -1
        : 0
    );
  } else if (filters?.sorted === 'name') {
    result = result.sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0));
  } else if (filters?.sorted === 'random') {
    result = randomizeArray(result);
  }

  if (filters?.limit > 0) {
    result = result.slice(0, filters.limit);
  }

  return result;
};
