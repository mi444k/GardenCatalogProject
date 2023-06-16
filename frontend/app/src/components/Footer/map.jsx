import React from 'react';
import Iframe from 'react-iframe';
import s from './style.module.css';

export const Map = () => {
  return (
    <Iframe
      url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d151.77569897335198!2d13.374857615771672!3d52.50789739069617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851d00f714303%3A0xb7b4fcea44396e2d!2sAIT%20TR%20GmbH!5e0!3m2!1sru!2sde!4v1686678398397!5m2!1sru!2sde"
      id="TelranDE"
      className={s.map}
      allowfullscreen="false"
      loading="lazy"
    />
  );
};
