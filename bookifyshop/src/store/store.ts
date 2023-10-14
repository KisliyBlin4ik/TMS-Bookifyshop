import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { IAddCart, IAddFavorite } from 'src/interface/interface';

export const initialState = {
  posts: [],
  post: [],
  cart: [],
  favorites: [],
  isLoading: false,
};

const rootReducer = (state: any = initialState, action: any) => {
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
    case 'ADD_TO_CART': {
      return {
        ...state,
        cart: state.cart.concat(action.payload),
      };
    }
    case 'ADD_TO_CART_AGAIN': {
      const updatedCart = state.cart.map((item: IAddCart) => {
        if (item.isbn13 === action.payload.isbn13) {
          const newCounter = item.counter + 1;
          return { ...item, counter: newCounter };
        }
        return item;
      });

      return {
        ...state,
        cart: updatedCart,
      };
    }
    case 'REMOVE_FROM_CART': {
      return {
        ...state,
        cart: state.cart.filter(
          (post: IAddCart) => post.isbn13 !== action.payload.isbn13
        ),
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
          (post: IAddFavorite) => post.isbn13 !== action.payload.isbn13
        ),
      };
    }
    case 'INCREMENT_COUNTER_TO_CART': {
      const updatedCart = state.cart.map((item: IAddCart) => {
        if (item.isbn13 === action.payload.isbn13) {
          const newCounter = item.counter + 1;
          return { ...item, counter: newCounter };
        }
        return item;
      });
      return {
        ...state,
        cart: updatedCart,
      };
    }
    case 'DECREMENT_COUNTER_TO_CART': {
      const updatedCart = state.cart
        .map((item: IAddCart) => {
          if (item.isbn13 === action.payload.isbn13) {
            const newCounter = item.counter - 1;
            if (newCounter >= 1) {
              // Возвращаем обновленный объект товара
              return { ...item, counter: newCounter };
            }
            return null; /* Исключаем товар */
          }
          return item;
        })
        // метод filter создаст новый массив, исключая пост, у которого newCounter меньше 1
        .filter((item: IAddCart | null) => item !== null);

      return {
        ...state,
        cart: updatedCart,
      };
    }
    case 'SET_LOADING': {
      return {
        ...state,
        isLoading: action.payload,
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
