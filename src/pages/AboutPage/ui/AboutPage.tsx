import { useTranslation } from 'react-i18next';

function AboutPage() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('About Page')}</h1>
    </div>
  );
}

export default AboutPage;
