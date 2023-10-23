import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { books } from './books';
import { book } from './post';
import { cart } from './cart';
import { favorites } from './favorites';
import { search } from './search';
import { searchOnPage } from './searchOnPage';
import { postAutosuggest } from './postAutosuggest';
import { IsAuthenticated } from './IsAuthenticated';
import { isLoading } from './isLoading';

export const initialState = {
  posts: [],
  post: [],
  cart: [],
  favorites: [],
  search: [],
  searchOnPage: [],
  postAutosuggest: [],
  IsAuthenticated: false,
  isLoading: false,
};

const rootReducer = combineReducers({
  books,
  book,
  cart,
  favorites,
  search,
  searchOnPage,
  postAutosuggest,
  IsAuthenticated,
  isLoading,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
