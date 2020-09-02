import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';
import Menu from '../screens/menu';
import OrderStatus from '../screens/orderStatus';
import Header from '../components/header';
import HeaderDos from '../components/headerDos';
import takeAway from '../screens/takeAway';
import GoToCartButton from '../components/goToCartButton';
import Cart from '../screens/cart';
import BurgerNavButton from '../components/burgerNavButton';
import Payment from '../screens/payment';

const Stack = createStackNavigator();

export default function eatHereNavigator({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="Home"
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
        name="Home"
        component={Home}
        options={({navigation}) => {
          return {
            headerRight: () => {
              return <GoToCartButton navigation={navigation} />;
            },
            headerLeft: () => {
              return <BurgerNavButton navigation={navigation} />;
            },
            headerTitle: () => <Header navigation={navigation} title="" />,
          };
        }}
      />
      <Stack.Screen
        name="takeAway"
        component={takeAway}
        options={({navigation}) => {
          return {
            headerRight: () => {
              return <GoToCartButton navigation={navigation} />;
            },
            headerTitle: () => (
              <HeaderDos navigation={navigation} title="Take Away" />
            ),
            headerBackTitle: ' ',
          };
        }}
      />
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={({navigation}) => {
          return {
            headerRight: () => {
              return <GoToCartButton navigation={navigation} />;
            },
            headerTitle: () => (
              <HeaderDos navigation={navigation} title="MENY" />
            ),
            headerBackTitle: ' ',
          };
        }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={({navigation}) => {
          return {
            headerTitle: () => (
              <HeaderDos navigation={navigation} title="Kassa" />
            ),
          };
        }}
      />
      <Stack.Screen
        name="Pay"
        component={Payment}
        options={({navigation}) => {
          return {
            headerTitle: () => <Header navigation={navigation} title=" " />,
            headerBackTitle: ' ',
          };
        }}
      />
      <Stack.Screen
        name="OrderStatus"
        component={OrderStatus}
        options={({navigation}) => {
          return {
            headerTitle: () => <Header navigation={navigation} title="" />,
            headerBackTitle: ' ',
          };
        }}
      />
    </Stack.Navigator>
  );
}
/* return {
    headerTitle: () => <Header navigation={navigation} title="Meny" />,
  };*/
