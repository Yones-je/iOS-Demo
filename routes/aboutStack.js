import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import About from '../screens/about';
import Header from '../components/header';
import GoToCartButton from '../components/goToCartButton';

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
            headerTitle: () => <Header navigation={navigation} title="Om" />,
          };
        }}
      />
    </Stack.Navigator>
  );
}
