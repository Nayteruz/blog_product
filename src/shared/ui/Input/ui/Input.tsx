import {
  ChangeEvent, FC, InputHTMLAttributes, memo, useEffect, useRef,
} from 'react';
import { cn } from '@/shared/lib';
import s from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

interface IInputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  title?: string;
  autofocus?: boolean;
  readOnly?: boolean;
}

export const Input: FC<IInputProps> = memo((props) => {
  const {value, onChange, className, title, autofocus, type = 'text', readOnly, ...otherProps} = props;
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  };

  useEffect(() => {
    if (autofocus) {
      inputRef.current?.focus();
    }
  }, [autofocus]);

  return (
    <div className={cn(s.inputWrapper, className)}>
      {title && <div className={s.placeholder}>{title}</div>}
      <input
        value={value}
        type={type}
        readOnly={readOnly}
        className={cn(s.input, { [s.readOnly]: readOnly })}
        onChange={onChangeHandler}
        ref={inputRef}
        {...otherProps}
      />
    </div>
  );
});
