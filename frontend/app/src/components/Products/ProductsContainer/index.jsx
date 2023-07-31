import { useEffect, useState } from 'react';
import { ProductItem } from '../ProductItem';
import { useStore } from '../../../store';
import { filterProducts } from '../../../utils/filterProducts';
import { useParams, useResolvedPath } from 'react-router-dom';
import { IoEllipseOutline } from 'react-icons/io5';
import { CiDiscount1 } from 'react-icons/ci';
import { fetchProducts } from '../../../actions/asyncApi';
import s from './style.module.css';

export const ProductsContainer = ({
  showFilters = true,
  initFiltersState = {
    discounted: false,
    minPrice: null,
    maxPrice: null,
    sorted: null,
    limit: null,
    category: null,
  },
}) => {
  const { products } = useStore();

  const [showProducts, setShowProducts] = useState([]);
  const [showMoreBtn, setShowMoreBtn] = useState(false);
  const [filters, setFilters] = useState(initFiltersState);
  const [onlySale, setOnlySale] = useState(filters.discounted);

  const { cid } = useParams();
  const { pathname } = useResolvedPath();

  const handleShowItemsCount = (e) => {
    if (filters.limit < products.length) setFilters({...filters, limit: filters.limit + 9})
  } 

  const handleChangeMinPrice = (e) => {
    let minValue = +e.target.value;
    if (minValue < 0) {
      minValue = minValue * -1;
      e.target.value = minValue;
    }
    setFilters({ ...filters, minPrice: minValue });
  };

  const handleChangeMaxPrice = (e) => {
    let maxValue = +e.target.value;
    if (maxValue < 0) {
      maxValue = maxValue * -1;
      e.target.value = maxValue;
    }
    setFilters({ ...filters, maxPrice: maxValue });
  };

  const handleChangeDiscounted = () => {
    if (!pathname.includes('sale')) {
      setFilters({ ...filters, discounted: Boolean(!onlySale) });
      setOnlySale(Boolean(!onlySale));
    }
  };

  const handleChangeSorting = (e) => {
    setFilters({ ...filters, sorted: e.target.value });
  };

  const handleClearFilters = () => {
    setFilters(initFiltersState);
    if (!pathname.includes('sale')) {
      setOnlySale(false);
    }
  };

  useEffect(() => {
    if (!filters.discounted) filters.discounted = false;
    if (!filters.limit) filters.limit = 9;
    const fetch = async () => {
      if (!isNaN(+cid)) {
        filters.category = +cid;
      }
      await fetchProducts(filters);
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setShowMoreBtn(filters.limit < products.length);
    setShowProducts(filterProducts(products, filters));
  }, [products, filters]);

  return (
    <>
      {showFilters && products.length > 0 ? (
        <form
          className={s.filters_wrapper}
          onReset={(e) => handleClearFilters(e)}>
          <div className={s.price_filters}>
            <label>Price</label>
            <input
              onChange={handleChangeMinPrice}
              type="number"
              min={0}
              step={0.01}
              placeholder="from"
              id="minPrice"
              name="minPrice"
            />
            <input
              onChange={handleChangeMaxPrice}
              type="number"
              min={0}
              step={0.01}
              placeholder="to"
              id="maxPrice"
              name="maxPrice"
            />
          </div>
          <div
            className={s.discounted_btn}
            onClick={handleChangeDiscounted}>
            <span>Discounted items </span>
            <div>{onlySale ? <CiDiscount1 /> : <IoEllipseOutline />}</div>
          </div>
          <div>
            <label>Sorted</label>
            <select
              onChange={handleChangeSorting}
              id="sorting"
              name="sorting">
              <option value="">by default</option>
              <option value="name">Name</option>
              <option value="price">Price</option>
            </select>
          </div>
          <input
            className={s.clear_btn}
            type="reset"
            value="Clear"
          />
        </form>
      ) : (
        <></>
      )}
      {showProducts.length > 0 ? (
        <div className={s.categories_items}>
          {showProducts.map((elem) => (
            <ProductItem
              key={elem.id}
              {...elem}
            />
          ))}
          {showMoreBtn ? <div onClick={handleShowItemsCount} className={s.show_more_btn}>Show more...</div> : <></>}
        </div>
      ) : (
        <h1>Products not found...</h1>
      )}
    </>
  );
};
