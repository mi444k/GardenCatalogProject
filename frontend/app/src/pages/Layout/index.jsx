import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Layouts/Header';
import { Footer } from '../../components/Layouts/Footer';
import s from './style.module.css';
import { ScrollToTop } from '../../components/ScrollToTop';
import { Notifications } from '../../components/Notifications';

export const Layout = () => {
  return (
    <div className={s.wrapper}>
      <Notifications />
      <ScrollToTop />
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
