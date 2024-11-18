import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/';

function AboutPage() {
  const { t } = useTranslation();

  return (
    <Page>
      <h1>{t('About Page')}</h1>
    </Page>
  );
}

export default AboutPage;
