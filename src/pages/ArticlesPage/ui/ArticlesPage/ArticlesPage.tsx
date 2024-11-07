import { FC, memo } from 'react';
import { cn } from '@/shared/lib';
import s from './ArticlesPage.module.scss';

interface IArticlesPageProps {
  className?: string;
}

const ArticlesPage: FC<IArticlesPageProps> = (props) => {
  const { className } = props;

  return (
    <div className={cn(s.articlesPage, className)}>
      ArticlesPage
    </div>
  );
};

export default memo(ArticlesPage);
