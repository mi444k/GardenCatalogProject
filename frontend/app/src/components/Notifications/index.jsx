import React from 'react';
import { useStore } from '../../store';
import NotificationBlock from './NotificationBlock';
import s from './style.module.css';

export const Notifications = () => {
  const { messages } = useStore();
  return (
    <div className={s.wrapper}>
      {messages.map((msg) => (
        <NotificationBlock key={msg.ts} {...msg} />
      ))}
    </div>
  );
};
