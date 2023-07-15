import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from '../pages/MainPage';
import { PageNotFound } from '../pages/PageNotFound';
import { Layout } from '../pages/Layout';
import { CartPage } from '../pages/CartPage';
import { CategoriesPage } from '../pages/CategoriesPage';
import { ProductsPage } from '../pages/ProductsPage';
import { SingleProductPage } from '../pages/SingleProductPage';
import { SuccesPage } from '../pages/SuccessPage';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />

        <Route path="cart" element={<CartPage />} />

        <Route path="sales" element={<ProductsPage filters={{ discounted: true }} />} />
        <Route path="products" element={<ProductsPage filters={{ all: true }} />} />
        <Route path="category/:cid" element={<ProductsPage filters={{ category: true }} />} />

        <Route path="product/:pid" element={<SingleProductPage />} />

        <Route path="categories" element={<CategoriesPage />} />

        <Route path="success" element={<SuccesPage />} />

        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};
