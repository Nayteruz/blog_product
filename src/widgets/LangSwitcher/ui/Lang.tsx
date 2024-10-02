import { FC } from 'react';
import { cn } from '@/shared/lib';
import { useTranslation } from "react-i18next";
import { Button } from "@/shared/ui";
import RuIcon from '@/shared/assets/icons/ru.png';
import EnIcon from '@/shared/assets/icons/en.png';
import s from './Lang.module.scss'

interface ILangProps {
  className?: string;
}

const lang = [
  {lang: 'ru', name:'RU', icon: RuIcon},
  {lang: 'en', name:'EN', icon: EnIcon},
]

export const Lang: FC<ILangProps> = ({className}) => {
  const { i18n } = useTranslation();

  return (
    <ul className={cn(s.lang)}>
      {lang.map(({lang, name, icon}) => (
        <li key={lang}>
          <Button className={cn(s.button, {[s.active]: i18n.language === lang})} theme="clear" onClick={() => i18n.changeLanguage(lang)} >
            <img src={icon} alt={name} title={name} />
          </Button>
        </li>
      ))}
    </ul>
  );
};