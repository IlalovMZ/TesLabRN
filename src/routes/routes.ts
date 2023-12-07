import { Stack } from '../../App'
import { SCREENS } from './navigation.types'
import Main from '../screens/Main/screens'
import Welcome from '../screens/Welcome'

export type ScreenProps = Parameters<(typeof Stack)['Screen']>[number]

export const Screens: ScreenProps[] = [
  {
    name: SCREENS.MAIN,
    component: Main,
    options: {
      headerShown: false,
    },
  },
  {
    name: SCREENS.WELCOME,
    component: Welcome,
    options: {
      headerShown: false,
    },
  },
]
