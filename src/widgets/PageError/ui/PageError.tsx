import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Loader } from '@/shared/ui';
import s from './PageError.module.scss';

export const PageError: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Loader />
      <div className={s.text}>{t('page error')}</div>
      <Button
        theme="link"
        onClick={() => window.location.reload()}
      >
        {t('try again')}
      </Button>
    </>
  );
};
