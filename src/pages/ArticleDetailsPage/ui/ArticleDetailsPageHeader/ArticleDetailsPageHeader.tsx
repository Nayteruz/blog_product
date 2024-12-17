import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, HStack } from '@/shared/ui';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { getCanEditArticle } from '../../model/selectors/article';
import { getArticleDetailsData } from '@/entities/Article';

interface IArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader: FC<IArticleDetailsPageHeaderProps> = memo(({ className }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const canEdit = useSelector(getCanEditArticle);
  const article = useSelector(getArticleDetailsData);

  const navigateToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  const onEdit = useCallback(() => {
    navigate(`${RoutePath.article_edit}${article?.id}`);
  }, [navigate, article?.id]);

  return (
    <HStack justify="space-between" gap="16" className={className}>
      <Button onClick={navigateToList}>{t('Back to article list')}</Button>
      {canEdit && <Button onClick={onEdit}>{t('Edit article page')}</Button>}
    </HStack>
  );
});
