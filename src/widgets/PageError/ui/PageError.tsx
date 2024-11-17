import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Loader } from '@/shared/ui';
import { cn } from '@/shared/lib';
import s from './PageError.module.scss';

interface IPageErrorProps {
  className?: string;
  errorText?: string;
}

export const PageError: FC<IPageErrorProps> = (props) => {
  const { t } = useTranslation();
  const { className, errorText } = props;

  return (
    <div className={cn(s.pageError, className)}>
      <Loader />
      <div className={s.text}>{errorText || t('page error')}</div>
      <Button theme="link" onClick={() => window.location.reload()}>
        {t('try again')}
      </Button>
    </div>
  );
};
