import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { LoginUI } from "../view/Security/Login/LoginUI.controller";
import { RegisterUI } from "../view/Security/Register/RegisterUI.controller";


export interface IPublicRoute {
  name: string;
  component: React.FC;
  options?: NativeStackNavigationOptions;
}

export const publicRoutes: IPublicRoute[] = [
  {
    name: 'Login',
    component: LoginUI,
    options: { headerShown: false },
  },
  {
    name: 'Register',
    component: RegisterUI,
    options: { headerShown: false },
  },
];
