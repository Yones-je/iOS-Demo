import {ADD_TO_CART, REMOVE_FROM_CART} from '../actions/cart';
import {ADD_ORDER} from '../actions/orders';
import CartItem from '../../models/cartItem';
import {act} from 'react-test-renderer';

const initialState = {
  items: {},
  totalAmount: 0,
  count: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product.item;
      const prodPrice = addedProduct.price;
      const prodTitle = addedProduct.title;

      let updatedOrNewCartItem;

      if (state.items[addedProduct.id]) {
        // means we already have the item in the cart
        updatedOrNewCartItem = new CartItem(
          state.items[addedProduct.id].quantity + 1,
          prodPrice,
          prodTitle,
          state.items[addedProduct.id].sum + prodPrice,
        );
      } else {
        updatedOrNewCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice);
      }
      return {
        ...state,
        items: {...state.items, [addedProduct.id]: updatedOrNewCartItem},
        totalAmount: state.totalAmount + prodPrice,
        count: state.count + 1,
      };
    case REMOVE_FROM_CART:
      const currentQty = state.items[action.pid.item.productId].quantity;
      console.log(currentQty);
      let updatedCartItems;
      if (currentQty > 1) {
        // Then we need to reduce it not erase
        console.log(state.items[action.pid.item.productId]);

        const updatedCartItem = new CartItem(
          state.items[action.pid.item.productId].quantity - 1,
          state.items[action.pid.item.productId].price,
          state.items[action.pid.item.productId].title,
          state.items[action.pid.item.productId].sum -
            state.items[action.pid.item.productId].price,
        );
        updatedCartItems = {
          ...state.items,
          [action.pid.item.productId]: updatedCartItem,
        };
      } else {
        updatedCartItems = {...state.items};
        delete updatedCartItems[action.pid.item.productId];
      }
      return {
        ...state,
        items: updatedCartItems,
        totalAmount:
          state.totalAmount - state.items[action.pid.item.productId].price,
        count: state.count - 1,
      };
    /*case REMOVE_FROM_CART:
      console.log(state.items);
      console.log(action.pid.item.productId);
      const currentQty = state.items[action.pid.item.productId].quantity;

      if (currentQty > 1) {
        // Then we need to reduce it not erase
        const updatedCartItem = new CartItem(
          state.items[action.pid.item.productId].quantity - 1,
          state.items[action.pid.item.productId].productPrice,
          state.items[action.pid.item].productTitle,
          state.items[action.pid.item].sum -
            state.items[action.pid].productPrice,
        );
        updatedCartItems = {...state.items, [action.pid]: updatedCartItem};
      } else {
        updatedCartItems = {...state.items};
        delete updatedCartItems[action.pid.item];
      }
      return {
        ...state,
        items: updatedCartItems,
        totalAmount: state.totalAmount - state.items[action.pid].productPrice,
      }; */
    case ADD_ORDER:
      return initialState;
    default:
      return state;
  }
};
