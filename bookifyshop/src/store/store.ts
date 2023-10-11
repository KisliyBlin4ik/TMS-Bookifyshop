import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { IAddCart } from 'src/interface/interface';

export const initialState = {
  posts: [],
  post: [],
  cart: [],
  favorites: [],
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'GET_POSTS': {
      return {
        ...state,
        posts: action.payload,
      };
    }
    case 'GET_POST': {
      return {
        ...state,
        post: action.payload,
      };
    }
    case 'DELETE_POST': {
      return {
        ...state,
        post: [],
      };
    }
    case 'ADD_CART': {
      return {
        ...state,
        cart: state.cart.concat(action.payload),
      };
    }
    case 'ADD_TO_FAVORITES': {
      return {
        ...state,
        favorites: state.favorites.concat(action.payload),
      };
    }
    case 'REMOVE_FROM_FAVORITES': {
      return {
        ...state,
        favorites: state.favorites.filter(
          (post: IAddCart) => post.isbn13 !== action.payload.isbn13
        ),
      };
    }
    default:
      return state;
  }
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
