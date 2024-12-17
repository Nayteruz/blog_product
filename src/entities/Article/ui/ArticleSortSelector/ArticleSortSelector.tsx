import {
  ChangeEvent, FC, memo, useMemo 
} from 'react';
import { useTranslation } from 'react-i18next';
import { Select, ISelectOption, HStack } from '@/shared/ui';
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
      {
        value: 'asc',
        label: t('Ascending'),
      },
      {
        value: 'desc',
        label: t('Descending'),
      },
    ],
    [t],
  );

  const sortFieldOptions = useMemo<ISelectOption<TArticleSortField>[]>(
    () => [
      {
        value: ArticleSortField.CREATED_AT,
        label: t('sort by created'),
      },
      {
        value: ArticleSortField.TITLE,
        label: t('sort by title'),
      },
      {
        value: ArticleSortField.VIEWS,
        label: t('sort by views'),
      },
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
    <HStack gap="8" className={className}>
      <Select value={sort} onChange={onSort} label={t('Sort by')} options={sortFieldOptions} />
      <Select value={order} onChange={onOrder} label={t('View by')} options={orderOptions} />
    </HStack>
  );
});
