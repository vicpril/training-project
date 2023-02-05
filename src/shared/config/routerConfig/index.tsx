import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { RouteProps } from "react-router-dom"

export enum RouteName {
  Main = 'main',
  About = 'about'
}

export const RoutePaths: Record<RouteName, string> = {
  [RouteName.Main]: '/',
  [RouteName.About]: '/about',
}

export const routerConfig: Record<RouteName, RouteProps> = {
  [RouteName.Main]: {
    element: <MainPage />,
    path: RoutePaths.main
  },
  [RouteName.About]: {
    element: <AboutPage />,
    path: RoutePaths.about
  },
}