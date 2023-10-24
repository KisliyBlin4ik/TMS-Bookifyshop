import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import instance from 'src/axiosConfig.js';

export const FETCH_BOOK = (isbn13Arr: string[]) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    const instanceBook = async () => {
      try {
        const instancePromises = isbn13Arr.map(async (isbn13) => {
          const response = await instance.get(`books/${isbn13}`);
          return response.data;
        });
        const results = await Promise.all(instancePromises);
        dispatch({ type: 'GET_BOOK', payload: results });
      } catch (err) {
        console.log(err);
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    };
    instanceBook();
  };
};
