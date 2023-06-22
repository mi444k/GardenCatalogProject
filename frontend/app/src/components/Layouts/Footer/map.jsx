import React from 'react';
import Iframe from 'react-iframe';
import s from './style.module.css';

export const Map = () => {
  return (
    <Iframe
      url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.409042779866!2d13.372469776931943!3d52.50793613712224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sStarta%20Institute%20by%20Tel-Ran!5e0!3m2!1sru!2sde!4v1687419646981!5m2!1sru!2sde"
      id="TelranDE"
      className={s.map}
      allowfullscreen="false"
      loading="lazy"
    />
  );
};
