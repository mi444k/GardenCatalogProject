import React from 'react';
import s from './style.module.css';
import { Link } from 'react-router-dom';
import { Map } from './map';
import { FaWhatsapp, FaInstagram, FaDiscord } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.contacts}>
          <div style={{ fontWeight: '600' }}>Contact</div>
          <div className={s.tel}>+49 999 999 99 99</div>
          <div className={s.social_networks}>
            <Link to="#">
              <FaInstagram size={44} />
            </Link>
            <Link to="#">
              <FaWhatsapp size={44} />
            </Link>
            <Link to="#">
              <FaDiscord size={44} />
            </Link>
          </div>
        </div>
        <div className={s.address_block}>
          <div style={{ fontWeight: '600' }}>Address</div>
          <div className={s.address}>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</div>
          <div style={{ fontSize: '18px', paddingTop: '25px' }}>Working Hours:</div>
          <div style={{ fontSize: '24px' }}>24 hours a day</div>
        </div>
      </div>
      <Map />
    </div>
  );
};
