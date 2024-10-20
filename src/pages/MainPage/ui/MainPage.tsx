import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Input } from '@/shared/ui/Input/ui/Input';

const MainPage = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState('');

  const onChange = (val: string) => {
    setValue(val);
  };

  return (
    <div>
      <h1>{t('Main Page')}</h1>
      <Input value={value} onChange={onChange} placeholder="Username" title="Username" />
    </div>
  );
};

export default MainPage;
