import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { IAddCart, IAddFavorite } from 'src/interface/interface';
import { ROUTE_HOME, ROUTE_SEARCH } from 'src/utils/routes';
// import instance from "src/axiosConfig.js";

export const ADD_TO_FAVORITES = (post: IAddFavorite) => ({
  type: 'ADD_TO_FAVORITES',
  payload: post,
});
export const ADD_TO_CART = (post: IAddCart) => ({
  type: 'ADD_TO_CART',
  payload: post,
});
export const ADD_TO_CART_AGAIN = (post: IAddCart) => ({
  type: 'ADD_TO_CART_AGAIN',
  payload: post,
});

export const REMOVE_FROM_FAVORITES = (post: IAddFavorite) => ({
  type: 'REMOVE_FROM_FAVORITES',
  payload: post,
});
export const REMOVE_FROM_CART = (post: IAddCart) => ({
  type: 'REMOVE_FROM_CART',
  payload: post,
});

export const INCREMENT_COUNTER_TO_CART = (isbn13: string, counter: number) => ({
  type: 'INCREMENT_COUNTER_TO_CART',
  payload: { isbn13, counter },
});
export const DECREMENT_COUNTER_TO_CART = (isbn13: string, counter: number) => ({
  type: 'DECREMENT_COUNTER_TO_CART',
  payload: { isbn13, counter },
});

export const SET_AUTHENTICATED = (IsAuthenticated: boolean) => ({
  type: 'SET_AUTHENTICATED',
  payload: IsAuthenticated,
});

export const DELETE_POST = (navigate: any, obj: any) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: 'DELETE_POST', payload: obj });
    navigate(ROUTE_HOME);
  };
};

export const FETCH_POSTS = () => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    const activateUser = async () => {
      try {
        const response = await fetch('https://api.itbook.store/1.0/new');
        if (!response.ok) {
          throw new Error('Ошибка при запросе');
        }
        const data = await response.json();
        const books = data.books;
        dispatch({ type: 'GET_POSTS', payload: books });
      } catch (err) {
        console.log(err);
      }
    };
    activateUser();
  };
};

export const FETCH_POST = (isbn13Arr: string[]) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    const activateUser = async () => {
      try {
        const fetchPromises = isbn13Arr.map(async (isbn13) => {
          const response = await fetch(
            `https://api.itbook.store/1.0/books/${isbn13}`
          );
          if (!response.ok) {
            throw new Error('Ошибка при запросе');
          }
          const data = await response.json();
          return data;
        });
        const results = await Promise.all(fetchPromises);
        dispatch({ type: 'GET_POST', payload: results });
      } catch (err) {
        console.log(err);
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    };
    activateUser();
  };
};

export const SEARCH_POST = (navigate: any, search: string) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    const activateUser = async () => {
      try {
        navigate(`${ROUTE_SEARCH}/${search}`);
      } catch (err) {
        console.log(err);
      }
    };
    activateUser();
  };
};

export const SEARCH_ON_PAGE = (search: string, page: any) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    const activateUser = async () => {
      try {
        const response = await fetch(
          `https://api.itbook.store/1.0/search/${search}/${page}`
        );
        if (!response.ok) {
          throw new Error('Ошибка при запросе');
        }
        const data = await response.json();
        dispatch({ type: 'SEARCH_POST', payload: data });
        const books = data.books;
        const fetchPromises = books.map(async (item: any) => {
          const response = await fetch(
            `https://api.itbook.store/1.0/books/${item.isbn13}`
          );
          if (!response.ok) {
            throw new Error('Ошибка при запросе');
          }
          const data = await response.json();
          return data;
        });
        const results = await Promise.all(fetchPromises);
        dispatch({ type: 'SEARCH_ON_PAGE', payload: results });
      } catch (err) {
        console.log(err);
      }
    };
    activateUser();
  };
};

export const SEARCH_WITH_AUTOSUGGEST = (search: string) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    const activateUser = async () => {
      try {
        const response = await fetch(
          `https://api.itbook.store/1.0/search/${search}`
        );
        if (!response.ok) {
          throw new Error('Ошибка при запросе');
        }
        const data = await response.json();
        const books = data.books;
        const fetchPromises = books.map(async (item: any) => {
          const response = await fetch(
            `https://api.itbook.store/1.0/books/${item.isbn13}`
          );
          if (!response.ok) {
            throw new Error('Ошибка при запросе');
          }
          const data = await response.json();
          return data;
        });
        const results = await Promise.all(fetchPromises);
        dispatch({ type: 'SET_SEARCH_WITH_AUTOSUGGEST', payload: results });
      } catch (err) {
        console.log(err);
      }
    };
    activateUser();
  };
};
