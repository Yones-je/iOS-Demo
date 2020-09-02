import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function CartItem(props) {
  return (
    <View style={styles.cartItem}>
      <View style={styles.itemData}>
        <Text style={styles.quantity}>{props.quantity}st</Text>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={props.onAdd} style={styles.deleteButton}>
          <Icon name="ios-add-circle-outline" size={20} />
        </TouchableOpacity>
        <Text style={styles.amount}>{props.amount}kr</Text>
        <TouchableOpacity onPress={props.onRemove} style={styles.deleteButton}>
          <Icon name="ios-remove-circle-outline" size={20} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 2,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  itemData: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },
  quantity: {
    fontFamily: 'Quicksand-SemiBold',
    fontSize: 16,
  },
  title: {
    fontFamily: 'Poppins-Semibold',
    fontSize: 16,
    marginLeft: 10,
  },
  deleteButton: {
    marginHorizontal: 5,
  },
  amount: {
    fontFamily: 'Quicksand-SemiBold',
    fontSize: 16,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
});
