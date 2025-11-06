import { createDrawerNavigator } from '@react-navigation/drawer';
import { privateRoutes } from './PrivateRoutes';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      {privateRoutes.map(route => (
        <Drawer.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={route.options}
        />
      ))}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
