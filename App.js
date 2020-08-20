import 'react-native-gesture-handler';
import React from 'react';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import drawerNavigator from './routes/drawer';
import cartReducer from './store/reducers/cart';
import ordersReducer from './store/reducers/orders';
import productsReducer from './store/reducers/products';
import Icon from 'react-native-vector-icons/Ionicons';

Icon.loadFont();

const rootReducer = combineReducers({
  cart: cartReducer,
  orders: ordersReducer,
  products: productsReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return <Provider store={store}>{drawerNavigator()}</Provider>;
}
