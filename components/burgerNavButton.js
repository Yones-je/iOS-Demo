import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Platform} from 'react-native';
import {TouchableOpacity} from 'react-native';

const BurgerNavButton = ({navigation}) => {
  const burgerNav = () => {
    navigation.toggleDrawer();
  };
  return (
    <TouchableOpacity onPress={burgerNav}>
      <Icon
        name={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
        size={35}
        color="black"
        style={{paddingBottom: 10, paddingLeft: 10}}
      />
    </TouchableOpacity>
  );
};
export default BurgerNavButton;
