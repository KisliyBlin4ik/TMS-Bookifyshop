import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

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
