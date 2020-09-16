import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import About from '../screens/about';
import HeaderDos from '../components/headerDos';
import GoToCartButton from '../components/goToCartButton';
import BurgerNavButton from '../components/burgerNavButton';

const Stack = createStackNavigator();

export default function aboutNavigator({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="About"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'yellow',
          height: 60,
        },
        headerTintColor: '#444',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="About"
        component={About}
        options={({navigation}) => {
          return {
            headerRight: () => {
              return <GoToCartButton navigation={navigation} />;
            },
            headerTitle: () => <HeaderDos navigation={navigation} title="Om" />,
            headerLeft: () => {
              return <BurgerNavButton navigation={navigation} />;
            },
          };
        }}
      />
    </Stack.Navigator>
  );
}
