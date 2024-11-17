import { ChangeEvent, FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from '@/shared/ui';
import { Currency } from '../../model/types';

interface ICurrencySelectProps {
  className?: string;
  label?: string;
  value?: typeof Currency[keyof typeof Currency] | 'placeholder';
  readOnly?: boolean;
  name?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
}

const currencyList = Object.values(Currency).map(cur => ({ value: cur, label: cur }));

export const CurrencySelect: FC<ICurrencySelectProps> = memo((props) => {
  const { t } = useTranslation();
  const {
    className,
    label,
    value = '',
    readOnly,
    name = '',
    onChange,
    placeholder = t('Select currency'),
  } = props;

  return (
    <Select
      className={className}
      name={name}
      onChange={onChange}
      readOnly={readOnly}
      value={value}
      label={label}
      options={currencyList}
      placeholder={placeholder}
    />
  );
});
