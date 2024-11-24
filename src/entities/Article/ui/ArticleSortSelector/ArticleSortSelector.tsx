import {
  ChangeEvent, FC, memo, useMemo 
} from 'react';
import { useTranslation } from 'react-i18next';
import { Select, ISelectOption } from '@/shared/ui';
import { cn } from '@/shared/lib';
import s from './ArticleSortSelector.module.scss';
import { ArticleSortField, TArticleSortField } from '../../model/types/article';
import { TSortOrder } from '@/shared/types';

interface IArticleSortSelectorProps {
  className?: string;
  sort: TArticleSortField;
  order: TSortOrder;
  onChangeSort: (newSort: TArticleSortField) => void;
  onChangeOrder: (newOrder: TSortOrder) => void;
}

export const ArticleSortSelector: FC<IArticleSortSelectorProps> = memo((props) => {
  const { className, sort, order, onChangeOrder, onChangeSort } = props;
  const { t } = useTranslation();

  const orderOptions = useMemo<ISelectOption<TSortOrder>[]>(
    () => [
      { value: 'asc', label: t('Ascending') },
      { value: 'desc', label: t('Descending') },
    ],
    [t],
  );

  const sortFieldOptions = useMemo<ISelectOption<TArticleSortField>[]>(
    () => [
      { value: ArticleSortField.CREATED_AT, label: t('sort by created') },
      { value: ArticleSortField.TITLE, label: t('sort by title') },
      { value: ArticleSortField.VIEWS, label: t('sort by views') },
    ],
    [t],
  );

  const onSort = (e: ChangeEvent<HTMLSelectElement>) => {
    onChangeSort(e.target.value as TArticleSortField);
  };

  const onOrder = (e: ChangeEvent<HTMLSelectElement>) => {
    onChangeOrder(e.target.value as TSortOrder);
  };

  return (
    <div className={cn(s.articleSortSelector, className)}>
      <Select value={sort} onChange={onSort} label={t('Sort by')} options={sortFieldOptions} className={s.select} />
      <Select value={order} onChange={onOrder} label={t('View by')} options={orderOptions} className={s.select} />
    </div>
  );
});
