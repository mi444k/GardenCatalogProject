import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
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
