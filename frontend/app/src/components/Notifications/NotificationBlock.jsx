import React, { useEffect, useState } from 'react';
import s from './style.module.css';
import { IoClose } from 'react-icons/io5';
import { useStore } from '../../store';

const NotificationBlock = (msg) => {
  const { deleteMessage } = useStore();
  const [style, setStyle] = useState(`${s.message_block} ${msg.type === 'error' ? s.error_block : ''}`);

  useEffect(() => {
    const timer = setTimeout(() => deleteMessage(msg.ts), msg.type === 'error' ? 5000 : 3000);
    const hide = setTimeout(
      () => setStyle(`${s.message_block} ${msg.type === 'error' ? s.error_block : ''} ${s.hide_block}`),
      msg.type === 'error' ? 4500 : 2500
    );

    return () => {
      clearTimeout(timer);
      clearTimeout(hide);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={style}>
      <p className={s.title}>{msg.title}</p>
      <p className={s.description}>{msg.description}</p>
      <div className={s.close_btn} onClick={() => deleteMessage(msg.ts)}>
        <IoClose />
      </div>
    </div>
  );
};

export default NotificationBlock;
