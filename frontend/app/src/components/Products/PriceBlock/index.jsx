import { useEffect, useState } from 'react';
import { useStore } from '../../../store';

import s from './style.module.css';

export const FormatedCurrency = ({ value }) => {
  const { locales } = useStore();
  const [result, setResult] = useState();

  useEffect(() => {
    if (locales?.languages) {
      let lang = locales.languages.split(',')[0]
      if (!lang.includes('-')) {
        lang = `${lang}-${locales?.country_code}`
      }
      try {
        setResult(
          new Intl.NumberFormat(lang, {
            style: 'currency',
            currency: locales?.currency,
          }).format(+value)
        )
      } catch (err) {
        console.log(`Error: ${err}`)
      }
    } else {
      setResult(`${Number.parseFloat(value).toFixed(2)} $`);
    }
  }, [locales, value]);
  return <>{result}</>;
};

export const PriceBlock = ({ price, discont_price, className }) => {
  const discount = discont_price ? Math.round((price / discont_price) * 100 - 100) : 0;
  return (
    <div className={className ? className : s.wrapper}>
      <span className={s.price}>
        <FormatedCurrency value={discont_price ? discont_price : price} />
      </span>
      {discont_price && (
        <>
          <span className={s.full_price}>
            <FormatedCurrency value={price} />
          </span>
          <span className={s.discount}>{discount}%</span>
        </>
      )}
    </div>
  );
};
