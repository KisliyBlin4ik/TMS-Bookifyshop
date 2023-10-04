import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export const initialState = {
  posts: [],
  post: [],
};

const rootReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case 'GET_POSTS': {
      return {
        ...state,
        posts: action.payload,
      };
    }
  }
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
