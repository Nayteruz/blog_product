import { ChangeEvent, FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from '@/shared/ui';
import { Country } from '../../model/types';

interface ICountrySelectProps {
  className?: string;
  label?: string;
  value?: typeof Country[keyof typeof Country] | 'placeholder';
  readOnly?: boolean;
  name?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
}

const countryList = Object.values(Country).map(cur => ({ value: cur, label: cur }));

export const CountrySelect: FC<ICountrySelectProps> = memo((props) => {
  const { t } = useTranslation();
  const {
    className,
    label,
    value = '',
    readOnly,
    name = '',
    onChange,
    placeholder = t('Select country'),
  } = props;

  return (
    <Select
      className={className}
      name={name}
      onChange={onChange}
      readOnly={readOnly}
      value={value}
      label={label}
      options={countryList}
      placeholder={placeholder}
    />
  );
});
