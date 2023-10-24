import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import instance from 'src/axiosConfig.js';

export const FETCH_BOOKS = () => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    try {
      instance.get('new').then((data: any) => {
        const books = data.data.books;
        dispatch({ type: 'GET_BOOKS', payload: books });
      });
    } catch (err) {
      console.log(err);
    }
  };
};
