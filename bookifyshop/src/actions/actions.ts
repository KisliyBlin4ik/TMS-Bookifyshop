import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
// import instance from "src/axiosConfig.js";

export const FETCH_POSTS = () => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    const activateUser = async () => {
      try {
        const response = await fetch(
          // 'https://64f101948a8b66ecf77a538e.mockapi.io/postsForReact/posts'
          'https://api.itbook.store/1.0/new'
        );
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

export const FETCH_POST = (isbn13: string) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    const activateUser = async () => {
      try {
        const response = await fetch(
          `https://api.itbook.store/1.0/books/${isbn13}`
        );
        if (!response.ok) {
          throw new Error('Ошибка при запросе');
        }
        const data = await response.json();
        dispatch({ type: 'GET_POST', payload: data });
      } catch (err) {
        console.log(err);
      }
    };
    activateUser();
  };
};

export const DELETE_POST = (navigate: any, payload: any) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: 'DELETE_POST', payload: {} });
    navigate('/home');
  };
};

export const ADD_CART = (addCart: any) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: 'ADD_CART', payload: addCart });
  };
};
