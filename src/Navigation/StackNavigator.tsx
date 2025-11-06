import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { publicRoutes } from './PublicRoutes';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      {publicRoutes.map(route => (
        <Stack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={route.options}
        />
      ))}
    </Stack.Navigator>
  );
};

export default StackNavigator;
