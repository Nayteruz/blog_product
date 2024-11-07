import type { Meta, StoryObj } from '@storybook/react';
import { ArticleDetails } from './ArticleDetails';
import {
  defaultDark, defaultPurple, StoryDecorator, ThemeDecorator,
} from '@/shared/config/storybook';
import { IArticle } from '../../model/types/article';

const article: IArticle = {
  id: '1',
  title: 'Go Language Update',
  subtitle: 'Основные новшества Go в 2023 году',
  img: 'https://blog.golang.org/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg',
  views: 1500,
  createdAt: 1698833600,
  type: [
    'IT',
  ],
  blocks: [
    {
      id: '1',
      type: 'TEXT',
      title: 'ECMAScript 2023',
      paragraphs: [
        'Новые версии ECMAScript, спецификации JavaScript, продолжают добавлять важные улучшения. Например, более мощные функциональные возможности для работы с коллекциями, улучшенные инструменты для управления асинхронным кодом и расширенные возможности синтаксиса.',
        'Новые механизмы позволяют более эффективно работать с потоками данных, что особенно полезно при разработке приложений, работающих с сетью и вводом/выводом в реальном времени.',
      ],
    },
    {
      id: '100',
      type: 'TEXT',
      title: 'Асинхронные итераторы и генераторы',
      paragraphs: [
        'Новые механизмы позволяют более эффективно работать с потоками данных, что особенно полезно при разработке приложений, работающих с сетью и вводом/выводом в реальном времени.',
      ],
    },
    {
      id: '101',
      type: 'TEXT',
      title: 'Интуитивные функции обработки ошибок',
      paragraphs: [
        'Улучшения в обработке исключений и корректной работы с промисами помогают создавать более надежные приложения. Введение нового синтаксиса, который упрощает чтение и написание сложных конструкций, имеет большое значение для поддержания чистоты и читаемости кода.',
      ],
    },
    {
      id: '102',
      type: 'TEXT',
      title: 'Операции с битами',
      paragraphs: [
        'Новые операторы позволяют более удобно и быстро производить операции, которые необходимы в графике и при оптимизированной обработке данных. Это открывает дополнительные возможности для применения JavaScript в новых контекстах, таких как криптография и обработка изображений.',
      ],
    },
    {
      id: '103',
      type: 'TEXT',
      title: 'Интеграция с современными фреймворками',
      paragraphs: [
        'JavaScript все больше интегрируется с современными фреймворками, такими как React, Angular и Vue. Новые возможности, такие как хуки в React и директивы в Vue, позволяют существенно упростить разработку и улучшить взаимодействие компонентов.', 'Эти и другие обновления делают JavaScript ещё более мощным инструментом, расширяя область его применения за пределы традиционной веб-разработки, в область нативных приложений и даже серверного кода.', 'Благодаря этим изменениям JavaScript остается актуальным выбором для разработчиков, стремящихся использовать современные технологии для создания сложных и интерактивных приложений.',
      ],
    },
    {
      id: '2',
      type: 'CODE',
      code: 'package main\n\nimport "fmt"\n\ntype List[T any] struct {\n    items []T\n}\n\nfunc (l *List[T]) Add(item T) {\n    l.items = append(l.items, item)\n}\n\nfunc (l List[T]) Get(index int) (T, bool) {\n    if index < 0 || index >= len(l.items) {\n        var zero T\n        return zero, false\n    }\n    return l.items[index], true\n}\n\nfunc (l List[T]) Size() int {\n    return len(l.items)\n}\n\nfunc main() {\n    integers := List[int]{items: []int{1, 2, 3}}\n    integers.Add(4)\n    fmt.Println("List of integers:", integers.items)\n    value, ok := integers.Get(2)\n    if ok {\n        fmt.Println("Value at index 2:", value)\n    } else {\n        fmt.Println("Index out of bounds")\n    }\n    fmt.Println("Size of list:", integers.Size())\n}',
    },
    {
      id: '3',
      type: 'CODE',
      code: 'public class Demo {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java 21!");\n    }\n}',
    },
    {
      id: '4',
      type: 'IMAGE',
      src: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D',
      title: 'Тенденции в кибербезопасности',
    },
    {
      id: '105',
      type: 'TEXT',
      title: 'Интеграция с современными фреймворками',
      paragraphs: [
        'JavaScript все больше интегрируется с современными фреймворками, такими как React, Angular и Vue. Новые возможности, такие как хуки в React и директивы в Vue, позволяют существенно упростить разработку и улучшить взаимодействие компонентов.', 'Эти и другие обновления делают JavaScript ещё более мощным инструментом, расширяя область его применения за пределы традиционной веб-разработки, в область нативных приложений и даже серверного кода.', 'Благодаря этим изменениям JavaScript остается актуальным выбором для разработчиков, стремящихся использовать современные технологии для создания сложных и интерактивных приложений.',
      ],
    },
    {
      id: '106',
      type: 'IMAGE',
      src: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D',
      title: 'Тенденции в кибербезопасности',
    },
  ],
};

const meta = {
  title: 'Entities/ArticleDetails',
  component: ArticleDetails,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    id: '1',
  },
  decorators: [StoryDecorator({
    articleDetails: {
      data: article,
      isLoading: false,
      error: undefined,
    },
  })],
} satisfies Meta<typeof ArticleDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};

export const Loading: Story = {
  decorators: [StoryDecorator({
    articleDetails: {
      isLoading: true,
    },
  })],
};

export const Error: Story = {
  decorators: [StoryDecorator({
    articleDetails: {
      error: 'Some test error',
    },
  })],
};

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
