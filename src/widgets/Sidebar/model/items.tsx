import React from 'react'
import { RoutePaths } from 'shared/config/routerConfig'
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import MainIcon from 'shared/assets/icons/main-20-20.svg'

export interface SidebarItemType {
  path: string,
  text: string,
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemList: SidebarItemType[] = [
  {
    path: RoutePaths.main,
    Icon: MainIcon,
    text: 'Главная',
  },
  {
    path: RoutePaths.about,
    Icon: AboutIcon,
    text: 'О сайте',
  },
  {
    path: RoutePaths.profile,
    Icon: ProfileIcon,
    text: 'Профиль',
  },
]
