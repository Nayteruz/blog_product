import { cn } from "@/shared/lib";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "@/widgets/Navbar";
import './styles/index.scss';
import { Sidebar } from "@/widgets/Sidebar";

const App = () => {
  const {theme} = useTheme();

  return (
    <div className={cn("app", theme)}>
      <Navbar />
      <Sidebar />
      <AppRouter />
    </div>
  )
}

export default App;