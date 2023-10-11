import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { IAddCart } from 'src/interface/interface';
// import instance from "src/axiosConfig.js";

export const ADD_TO_FAVORITES = (post: IAddCart) => ({
  type: 'ADD_TO_FAVORITES',
  payload: post,
});

export const REMOVE_FROM_FAVORITES = (post: IAddCart) => ({
  type: 'REMOVE_FROM_FAVORITES',
  payload: post,
});

export const FETCH_POSTS = () => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    const activateUser = async () => {
      try {
        const response = await fetch('https://api.itbook.store/1.0/new');
        if (!response.ok) {
          throw new Error('Ошибка при запросе');
        }
        const data = await response.json();
        
        // console.log(data);
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
          // console.log(data);
          return data
        })
        
        const results = await Promise.all(fetchPromises);
        // console.log(results);
        
        dispatch({ type: 'GET_POST', payload: results });
      } catch (err) {
        console.log(err);
      }
    };
    activateUser();
  };
};

export const DELETE_POST = (navigate: any, obj: any) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: 'DELETE_POST', payload: obj });
    navigate('/home');
  };
};

export const ADD_CART = (addCart: any) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: 'ADD_CART', payload: addCart });
  };
};
