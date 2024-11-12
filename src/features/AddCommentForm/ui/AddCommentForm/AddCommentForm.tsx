import {
  ChangeEvent, FC, memo, useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { cn } from '@/shared/lib';
import s from './AddCommentForm.module.scss';
import { Input } from '@/shared/ui/Input/ui/Input';
import { Button } from '@/shared/ui';
import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/AddCommentFormSlice';
import { ReducersList, useDynamicReducer } from '@/shared/hooks/useDynamicReducer';

export interface IAddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const initialReducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm: FC<IAddCommentFormProps> = memo(({ className, onSendComment }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const text = useSelector(getAddCommentFormText);
  const error = useSelector(getAddCommentFormError);

  useDynamicReducer(initialReducers);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(addCommentFormActions.setText(e.target.value));
  }, [dispatch]);

  const handlerSendComment = useCallback(() => {
    onSendComment(text);
    dispatch(addCommentFormActions.setText(''));
  }, [dispatch, onSendComment, text]);

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className={cn(s.addCommentForm, className)}>
      <Input placeholder={t('Your comment')} value={text} onChange={onChange} className={s.input} />
      <Button type="button" theme="outline" onClick={handlerSendComment}>{t('Send comment')}</Button>
    </div>
  );
});

export default AddCommentForm;
