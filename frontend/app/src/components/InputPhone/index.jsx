import React, { useEffect, useState } from 'react';
import Input from 'react-phone-number-input/input';
import { useStore } from '../../store';

export const InputPhone = ({ className }) => {
  const { locales } = useStore();
  const [phone, setPhone] = useState();

  useEffect(() => {
    const fetch = async () => {
      setPhone(await locales?.country_calling_code);
    };
    fetch().catch(console.error);
  }, [locales]);
  return (
    <Input
      className={className}
      id="phone"
      international
      withCountryCallingCode
      placeholder="Phone number"
      value={phone}
      onChange={setPhone}
    />
  );
};
