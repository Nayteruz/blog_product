import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { cn } from '@/shared/lib';
import { Page } from '@/widgets/Page';
import s from './ArticleEditPage.module.scss';

interface IArticleEditPageProps {
  className?: string;
}

const ArticleEditPage: FC<IArticleEditPageProps> = memo(({ className }) => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  return (
    <Page className={cn(s.articleEditPage, className)}>
      <h1>{isEdit ? `${t('Edit article')} ${id}` : t('Create article')}</h1>
    </Page>
  );
});

export default ArticleEditPage;
