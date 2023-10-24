import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export const FETCH_BOOK = (isbn13Arr: string[]) => {
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
        dispatch({ type: 'GET_BOOK', payload: results });
      } catch (err) {
        console.log(err);
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    };
    activateUser();
  };
};
