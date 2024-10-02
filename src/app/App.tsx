import { cn } from "@/shared/lib";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";
import { Footer } from "@/widgets/Footer";
import { Suspense } from "react";
import './styles/index.scss';

const App = () => {
  const {theme} = useTheme();

  return (
    <div className={cn("app", theme)}>
      <Suspense fallback="">
        <Navbar />
        <Sidebar />
        <AppRouter />
        <Footer />
      </Suspense>
    </div>
  )
}

export default App;