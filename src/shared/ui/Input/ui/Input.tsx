import {
  ChangeEvent, FC, InputHTMLAttributes, memo, useEffect, useRef,
} from 'react';
import { cn } from '@/shared/lib';
import s from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface IInputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  title?: string;
  autofocus?: boolean;
}

export const Input: FC<IInputProps> = memo((props) => {
  const {
    value, onChange, className, title, autofocus, type = 'text', ...otherProps
  } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  useEffect(() => {
    if (autofocus) {
      inputRef.current?.focus();
    }
  }, [autofocus]);

  return (
    <div className={cn(s.inputWrapper, className)}>
      {title && <div className={s.placeholder}>{title}</div>}
      <input value={value} type={type} className={s.input} onChange={onChangeHandler} ref={inputRef} {...otherProps} />
    </div>
  );
});
