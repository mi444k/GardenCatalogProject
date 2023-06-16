import { useEffect, useState } from 'react';
import { useStore } from '../../store';

export const FormatedCurrency = ({ value }) => {
  const { locale } = useStore();
  const [result, setResult] = useState();

  useEffect(() => {
    if (locale?.languages) {
      setResult(
        new Intl.NumberFormat(`${locale?.languages}-${locale?.country_code}`, {
          style: 'currency',
          currency: locale?.currency,
        }).format(+value)
      );
    } else {
      setResult(Number.parseFloat(value).toFixed(2));
    }
  }, [locale, value]);
  return <>{result}</>;
};
