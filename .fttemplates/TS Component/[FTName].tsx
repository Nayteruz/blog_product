import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib';
import s from './[FTName | camelcase].module.scss';

interface I[FTName]Props {
  className?: string;
}

export const [FTName]: FC<I[FTName]Props> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={cn(s.[FTName | camelcase], className)}>
      [FTName]
    </div>
  );
};