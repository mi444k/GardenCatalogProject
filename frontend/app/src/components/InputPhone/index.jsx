import React, { useEffect, useState } from 'react';
import Input from 'react-phone-number-input/input';
import { isValidPhoneNumber } from 'react-phone-number-input'
import { useStore } from '../../store';
import s from './style.module.css'

export const InputPhone = ({ className }) => {
  const { locales } = useStore();
  const [phone, setPhone] = useState();
  const [classes, setClasses] = useState(className);

  const onChange = (value) => {
    if (!value) value = '+'
    if (isValidPhoneNumber(value)) setClasses(`${className} ${s.correct}`)
    else setClasses(`${className} ${s.wrong}`)
    setPhone(value)
  }

  useEffect(() => {
    const fetch = async () => {
      setPhone(await locales?.country_calling_code);
    };
    fetch().catch(console.error);
  }, [locales]);
  return (
    <Input
      className={classes}
      id="phone"
      international
      withCountryCallingCode
      placeholder="Phone number"
      value={phone}
      onChange={onChange}
    />
  );
};
