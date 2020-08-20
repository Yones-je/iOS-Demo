import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Platform} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Badge from './badge';

const GoToCartButton = ({navigation}) => {
  const goToCart = () => {
    navigation.navigate('Cart');
  };
  return (
    <TouchableOpacity onPress={goToCart}>
      <Badge />
      <Icon
        name={Platform.OS === 'android' ? 'md-restaurant' : 'ios-restaurant'}
        size={23}
        color="deepskyblue"
        style={{padding: 10}}
      />
    </TouchableOpacity>
  );
};
export default GoToCartButton;
