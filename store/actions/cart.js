export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addToCart = product => {
  console.log(product.item.price);
  return {type: ADD_TO_CART, product: product};
};

export const removeFromCart = id => {
  return {type: REMOVE_FROM_CART, pid: id};
};
