import { cn } from "@/shared/lib"
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";
import s from './Navbar.module.scss'

interface INavbarProps {
  className?: string;
}

export const Navbar = ({className}: INavbarProps) => {
  return (
    <nav className={cn(s.navbar, className)}>
      <ThemeSwitcher className={s.switcher} />
      <div className={s.links}>
        <AppLink to={"/about"} theme='secondary'>About</AppLink>
        <AppLink to={"/"} theme='secondary'>Main</AppLink>
      </div>
    </nav>
  )
}