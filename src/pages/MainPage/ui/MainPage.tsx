import { useTranslation } from 'react-i18next';
import { Page } from '@/shared/ui';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <h1>{t('Main Page')}</h1>
    </Page>
  );
};

export default MainPage;
