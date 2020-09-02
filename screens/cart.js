import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Button,
} from 'react-native';
import {useSelector} from 'react-redux';
import CartItem from '../components/cartItem';
import {useDispatch} from 'react-redux';
import * as cartActions from '../store/actions/cart';
import SelectPicker from 'react-native-form-select-picker';

export default function CartScreen({navigation}) {
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => {
    const transformedCartItems = [];
    for (const id in state.cart.items) {
      transformedCartItems.push({
        productId: id,
        title: state.cart.items[id].title,
        price: state.cart.items[id].price,
        quantity: state.cart.items[id].quantity,
        sum: state.cart.items[id].sum,
      });
    }
    return transformedCartItems;
  });
  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Summa:
          <Text style={styles.amount}>{cartTotalAmount}kr</Text>
        </Text>
        <SelectPicker
          placeholder="Välj betalningsalternativ"
          doneButtonText="Välj"
          onValueChange={(value) => {
            navigation.navigate(value[0], {
              status: value[1],
              total: cartTotalAmount,
            });
          }}
          selected={null}
          dismissable={true}>
          <SelectPicker.Item
            label="Betala Direkt"
            value={['Pay', 'Din beställning förbereds']}
          />
          <SelectPicker.Item
            label="Betala i Kassan"
            value={['OrderStatus', 'Väntar på betalning']}
          />
        </SelectPicker>
      </View>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.productId}
        renderItem={({item}) => (
          <CartItem
            quantity={item.quantity}
            title={item.title}
            amount={item.sum}
            onAdd={() => {
              dispatch(cartActions.addToCart({item}));
            }}
            onRemove={() => {
              dispatch(cartActions.removeFromCart({item}));
            }}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'wheat',
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 40,
    padding: 10,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#eee',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    borderWidth: 1,
  },
  summaryText: {
    fontFamily: 'Poppins-Semibold',
    fontSize: 18,
  },
  amount: {
    fontFamily: 'Quicksand-SemiBold',
    fontSize: 18,
  },
});
