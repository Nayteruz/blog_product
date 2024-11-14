import {FC, memo, useCallback,} from 'react';
import { cn } from '@/shared/lib';
import s from './Code.module.scss';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';

interface ICodeProps {
  className?: string;
  text: string;
}

export const Code: FC<ICodeProps> = memo(({ className, text }) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={cn(s.code, className)}>
      <Button onClick={onCopy} className={s.copyBtn} theme="clear"><Icon name="copy" /></Button>
      <code>
        {text}
      </code>
    </pre>
  );
});
