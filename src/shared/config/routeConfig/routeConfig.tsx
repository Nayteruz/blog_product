import { AboutPage } from "@/pages/AboutPage";
import { MainPage } from "@/pages/MainPage";
import { RouteProps } from "react-router-dom";

export const AppRoutes = {
  MAIN: "main",
  ABOUT: "about",
} as const;

type TAppRoutes = typeof AppRoutes[keyof typeof AppRoutes];

export const RoutePath: Record<TAppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
};

export const routeConfig: Record<TAppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
}