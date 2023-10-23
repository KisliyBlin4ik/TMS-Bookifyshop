import { IAddCart } from 'src/utils/interface';

export const ADD_TO_CART = (post: IAddCart) => ({
  type: 'ADD_TO_CART',
  payload: post,
});

export const ADD_TO_CART_AGAIN = (post: IAddCart) => ({
  type: 'ADD_TO_CART_AGAIN',
  payload: post,
});

export const REMOVE_FROM_CART = (post: IAddCart) => ({
  type: 'REMOVE_FROM_CART',
  payload: post,
});
