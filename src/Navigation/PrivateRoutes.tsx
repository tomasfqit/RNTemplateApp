import { HomeUI } from '../view/MainLayout/Home/HomeUI.controller';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import {
  DrawerNavigationOptions,
  DrawerNavigationProp,
} from '@react-navigation/drawer';

export interface IPrivateRoute {
  name: string;
  component: React.FC;
  options?:
    | DrawerNavigationOptions
    | ((props: {
        route: RouteProp<ParamListBase, string>;
        navigation: DrawerNavigationProp<ParamListBase, string, undefined>;
        theme: ReactNavigation.Theme;
      }) => DrawerNavigationOptions);
}

export const privateRoutes: IPrivateRoute[] = [
  {
    name: 'Home',
    component: HomeUI,
    options: { headerShown: false },
  },
];
