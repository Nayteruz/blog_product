import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib';
import s from './[FTName].module.scss';

interface I[FTName]Props {
  className?: string;
}

export const [FTName]: FC<I[FTName]Props> = memo(({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={cn(s.[FTName | camelcase], className)}>
      [FTName]
    </div>
  );
});