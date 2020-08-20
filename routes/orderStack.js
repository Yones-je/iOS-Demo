import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OrderStatus from '../screens/orderStatus';
import Header from '../components/header';

const Stack = createStackNavigator();

export default function orderNavigator({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="Din Order"
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
        name="Orderstatus"
        component={OrderStatus}
        options={({navigation}) => {
          return {
            headerTitle: () => (
              <Header navigation={navigation} title="Orderstatus" />
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
}
