import { FC, memo } from 'react';
import { cn } from '@/shared/lib';
import s from './ArticlesPage.module.scss';
import { ArticleList, IArticle } from '@/entities/Article';

interface IArticlesPageProps {
  className?: string;
}

const mockArticle = {
  id: '2',
  title: 'Vue.js Improvements and other text for example',
  subtitle: 'Что нового в Vue.js 3.2?',
  user: {
    id: '1',
    username: 'admin',
    avatar: 'https://vuejs.org/images/logo.png',
    role: 'ADMIN',
  },
  img: 'https://vuejs.org/images/logo.png',
  views: 1800,
  createdAt: 1655833600,
  type: ['IT', 'ECONOMICS', 'SCIENCE', 'EXONOMICS'],
  blocks: [
    {
      id: '1',
      type: 'TEXT',
      title: 'Новые фичи Vue.js',
      paragraphs: [
        'В новой версии Vue.js 3.2 стало проще работать с рендерингом и композиционным API.',
        'Это повышает эффективность работы разработчиков и улучшает стабильность приложений.',
        'В новой версии Vue.js 3.2 стало проще работать с рендерингом и композиционным API.',
        'Это повышает эффективность работы разработчиков и улучшает стабильность приложений.',
        'В новой версии Vue.js 3.2 стало проще работать с рендерингом и композиционным API.',
        'Это повышает эффективность работы разработчиков и улучшает стабильность приложений.',
        'В новой версии Vue.js 3.2 стало проще работать с рендерингом и композиционным API.',
        'Это повышает эффективность работы разработчиков и улучшает стабильность приложений.',
        'В новой версии Vue.js 3.2 стало проще работать с рендерингом и композиционным API.',
        'Это повышает эффективность работы разработчиков и улучшает стабильность приложений.',
        'В новой версии Vue.js 3.2 стало проще работать с рендерингом и композиционным API.',
        'Это повышает эффективность работы разработчиков и улучшает стабильность приложений.',
        'В новой версии Vue.js 3.2 стало проще работать с рендерингом и композиционным API.',
        'Это повышает эффективность работы разработчиков и улучшает стабильность приложений.',
        'В новой версии Vue.js 3.2 стало проще работать с рендерингом и композиционным API.',
        'Это повышает эффективность работы разработчиков и улучшает стабильность приложений.',
        'В новой версии Vue.js 3.2 стало проще работать с рендерингом и композиционным API.',
        'Это повышает эффективность работы разработчиков и улучшает стабильность приложений.',
        'В новой версии Vue.js 3.2 стало проще работать с рендерингом и композиционным API.',
        'Это повышает эффективность работы разработчиков и улучшает стабильность приложений.',
      ],
    },
    {
      id: '2',
      type: 'CODE',
      // eslint-disable-next-line max-len
      code: "<template>\n  <div>{{ message }}</div>\n</template>\n\n<script setup>\nconst message = 'Hello, Vue!'\n</script>",
    },
  ],
} as IArticle;

const ArticlesPage: FC<IArticlesPageProps> = props => {
  const { className } = props;

  return (
    <div className={cn(s.articlesPage, className)}>
      <ArticleList
        articles={new Array(16).fill(0).map((item, index) => ({
          ...mockArticle,
          id: String(index),
        }))}
      />
    </div>
  );
};

export default memo(ArticlesPage);
