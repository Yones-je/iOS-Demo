import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import aboutNavigator from './aboutStack';
import eatHereNavigator from './eatHereStack';
import OrderNavigator from './orderStack';

const Drawer = createDrawerNavigator();

export default function drawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={eatHereNavigator} />
        <Drawer.Screen name="About" component={aboutNavigator} />
        <Drawer.Screen name="Din Order" component={OrderNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
