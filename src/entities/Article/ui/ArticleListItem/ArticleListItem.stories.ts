import type { Meta, StoryObj } from '@storybook/react';
import { ArticleListItem } from './ArticleListItem';
import { defaultDark, defaultPurple, ThemeDecorator } from '@/shared/config/storybook';
import { ArticleListView, IArticle } from '../../model/types/article';

const mockArticle = {
  id: '2',
  title: 'Vue.js Improvements and other text for example',
  subtitle: 'Что нового в Vue.js 3.2?',
  img: 'https://vuejs.org/images/logo.png',
  user: {
    id: '1',
    username: 'admin',
  },
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
      ],
    },
    {
      id: '2',
      type: 'CODE',
      code: "<template>\n  <div>{{ message }}</div>\n</template>\n\n<script setup>\nconst message = 'Hello, Vue!'\n</script>",
    },
  ],
} as IArticle;

const meta = {
  title: 'Entities/Article/ArticleListItem',
  component: ArticleListItem,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    article: mockArticle,
    view: ArticleListView.LIST,
  },
} satisfies Meta<typeof ArticleListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = { args: {} };

export const Dark: Story = {
  ...defaultDark,
  args: {},
  decorators: [ThemeDecorator('dark')],
};

export const Purple: Story = {
  ...defaultPurple,
  args: {},
  decorators: [ThemeDecorator('purple')],
};

export const ViewSimple: Story = { args: { view: ArticleListView.SIMPLE } };

export const DarkSimple: Story = {
  ...defaultDark,
  args: { view: ArticleListView.SIMPLE },
  decorators: [ThemeDecorator('dark')],
};

export const PurpleSimple: Story = {
  ...defaultPurple,
  args: { view: ArticleListView.SIMPLE },
  decorators: [ThemeDecorator('purple')],
};
