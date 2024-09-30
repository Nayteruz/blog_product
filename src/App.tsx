import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPageAsync";
import { MainPageAsync } from "./pages/MainPage/MainPageAsync";
import { useTheme } from "./theme/useTheme";
import './styles/index.scss';
import { cn } from "./helpers/classNames/classNames";

const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={cn("app", theme)}>
      <button onClick={() => toggleTheme()}>Toggle theme</button>
      <Link to={"/about"}>About</Link>
      <Link to={"/"}>Main</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path="/about" element={<AboutPageAsync />} />
            <Route path="/" element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App;