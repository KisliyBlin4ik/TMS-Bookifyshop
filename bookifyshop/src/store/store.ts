import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export const initialState = {
  posts: [],
  post: {
    author: '',
    desc: '',
    error: '',
    image: '',
    isbn10: '',
    isbn13: '',
    language: '',
    pages: '',
    pdf: {
      FreeeBook: '',
    },
    price: '',
    publisher: '',
    rating: '',
    subtitle: '',
    title: '',
    url: '',
    year: '',
  },
  cart: [],
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
        post: {}, 
      };
    }
    case 'ADD_CART': {
      return {
        ...state,
        cart: state.cart.concat(action.payload), 
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
