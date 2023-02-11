import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { RouteProps } from 'react-router-dom'

export enum RouteName {
  Main = 'main',
  About = 'about',
  NotFound = 'notFound'
}

export const RoutePaths: Record<RouteName, string> = {
  [RouteName.Main]: '/',
  [RouteName.About]: '/about',
  [RouteName.NotFound]: '/*',
}

export const routerConfig: Record<RouteName, RouteProps> = {
  [RouteName.Main]: {
    element: <MainPage />,
    path: RoutePaths.main,
  },
  [RouteName.About]: {
    element: <AboutPage />,
    path: RoutePaths.about,
  },
  [RouteName.NotFound]: {
    element: <NotFoundPage />,
    path: RoutePaths.notFound,
  },
}
