import { IAddFavorite } from 'src/utils/interface';

export function favorites(state: any = [], action: any) {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      return state.concat(action.payload);
    case 'REMOVE_FROM_FAVORITES':
      return state.filter(
        (post: IAddFavorite) => post.isbn13 !== action.payload.isbn13
      );
    default:
      return state;
  }
}
