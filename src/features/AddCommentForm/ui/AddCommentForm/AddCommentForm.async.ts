import { FC, lazy } from 'react';
import { IAddCommentFormProps } from './AddCommentForm';

export const AddCommentFormAsync = lazy<FC<IAddCommentFormProps>>(
  () =>
    // eslint-disable-next-line
    new Promise((resolve) => {
      setTimeout(() => resolve(import('./AddCommentForm')), 1000);
    }),
);
