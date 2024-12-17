import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text, Button, HStack } from '@/shared/ui';
import {
  getProfileData, getProfileReadOnly, profileActions, updateProfileData 
} from '@/entities/Profile';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { getUserAuthData } from '@/entities/User';

interface IIndexProps {
  className?: string;
}

export const ProfilePageHeader: FC<IIndexProps> = ({ className }) => {
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData && profileData && authData?.id === profileData?.id;
  const isReadOnly = useSelector(getProfileReadOnly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadOnly(false));
  }, [dispatch]);

  const onCancel = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <HStack className={className} justify="space-between">
      <Text title={t('Profile title')} />
      {canEdit &&
        (isReadOnly ? (
          <Button theme="outline" onClick={onEdit}>
            {t('Edit profile')}
          </Button>
        ) : (
          <HStack gap="16">
            <Button theme="outlineRed" onClick={onCancel}>
              {t('Cancel edit profile')}
            </Button>
            <Button theme="outline" onClick={onSave}>
              {t('Save profile')}
            </Button>
          </HStack>
        ))}
    </HStack>
  );
};
