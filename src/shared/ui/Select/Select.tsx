import {
  ChangeEvent, FC, memo, SelectHTMLAttributes,
  useMemo,
} from 'react';
import { cn } from '@/shared/lib';
import s from './Select.module.scss';

type HTMLSelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'value' | 'onChange' | 'readOnly'>;

interface ISelectProps extends HTMLSelectProps {
  className?: string;
  label?: string;
  placeholder?: string;
  readOnly?: boolean;
  value?: string;
  options: {value: string, label: string}[]
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const Select: FC<ISelectProps> = memo((props) => {
  const {
    className, label, readOnly, placeholder, options, onChange, value, ...otherProps
  } = props;
  const mods = {
    [s.disabled]: readOnly,
  };

  const optionsList = useMemo(() => options.map((option) => (
    <option key={option.value} value={option.value}>{option.label}</option>
  )), [options]);

  return (
    <div className={cn(s.wrapper, className)}>
      {label && <span className={s.label}>{label}</span>}
      <select
        value={value}
        className={cn(s.select, mods)}
        onChange={onChange}
        {...otherProps}
        disabled={readOnly}
      >
        {placeholder && <option value="placeholder" disabled>{placeholder}</option>}
        {optionsList}
      </select>
    </div>
  );
});
