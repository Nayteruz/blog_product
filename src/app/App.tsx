import { Link } from "react-router-dom";
import { cn } from "@/shared/lib";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import './styles/index.scss';

const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={cn("app", theme)}>
      <button onClick={() => toggleTheme()}>Toggle theme</button>
      <Link to={"/about"}>About</Link>
      <Link to={"/"}>Main</Link>
      <AppRouter />
    </div>
  )
}

export default App;