import {
  ChangeEvent, FC, SelectHTMLAttributes, useMemo 
} from 'react';
import { cn } from '@/shared/lib';
import s from './Select.module.scss';

type HTMLSelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'value' | 'onChange' | 'readOnly'>;

export interface ISelectOption<T extends string = string> {
  value: T;
  label: string;
}

interface ISelectProps<T extends string = string> extends HTMLSelectProps {
  className?: string;
  label?: string;
  placeholder?: string;
  readOnly?: boolean;
  value?: T;
  options: ISelectOption<T>[];
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const Select: FC<ISelectProps> = <T extends string>(props: ISelectProps<T>) => {
  const { className, label, readOnly, placeholder, options, onChange, value, ...otherProps } = props;
  const mods = { [s.disabled]: readOnly };

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e);
    }
  };

  const optionsList = useMemo(
    () =>
      options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      )),
    [options],
  );

  return (
    <div className={cn(s.wrapper, className)}>
      {label && <span className={s.label}>{label}</span>}
      <select
        value={value}
        className={cn(s.select, mods)}
        onChange={onChangeHandler}
        {...otherProps}
        disabled={readOnly}
      >
        {placeholder && (
          <option value="placeholder" disabled>
            {placeholder}
          </option>
        )}
        {optionsList}
      </select>
    </div>
  );
};
