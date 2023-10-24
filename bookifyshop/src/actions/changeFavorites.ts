import { IAddFavorite } from 'src/utils/interface';

export const ADD_TO_FAVORITES = (post: IAddFavorite) => ({
  type: 'ADD_TO_FAVORITES',
  payload: post,
});

export const REMOVE_FROM_FAVORITES = (post: IAddFavorite) => ({
  type: 'REMOVE_FROM_FAVORITES',
  payload: post,
});
