import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export const FETCH_BOOKS = () => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    const activateUser = async () => {
      try {
        const response = await fetch('https://api.itbook.store/1.0/new');
        if (!response.ok) {
          throw new Error('Ошибка при запросе');
        }
        const data = await response.json();
        const books = data.books;
        dispatch({ type: 'GET_BOOKS', payload: books });
      } catch (err) {
        console.log(err);
      }
    };
    activateUser();
  };
};
