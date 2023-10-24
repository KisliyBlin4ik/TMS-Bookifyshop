import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import instance from 'src/axiosConfig.js';

export const SEARCH_ON_PAGE = (search: string, page: any) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    try {
      const response = await instance.get(`search/${search}/${page}`);
      const data = await response.data;
      dispatch({ type: 'SEARCH_POST', payload: data });
      const books = data.books;
      const instancePromises = books.map(async (item: any) => {
        const bookResponse = await instance.get(`books/${item.isbn13}`);
        return bookResponse.data;
      });
      const results = await Promise.all(instancePromises);
      dispatch({ type: 'SEARCH_ON_PAGE', payload: results });
    } catch (err) {
      console.log(err);
    }
  };
};

export const SEARCH_WITH_AUTOSUGGEST = (search: string) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    try {
      const response = await instance.get(`search/${search}`);
      const data = await response.data;
      const books = data.books;
      const instancePromises = books.map(async (item: any) => {
        const bookResponse = await instance.get(`books/${item.isbn13}`);
        return bookResponse.data;
      });
      const results = await Promise.all(instancePromises);
      dispatch({ type: 'SET_SEARCH_WITH_AUTOSUGGEST', payload: results });
    } catch (err) {
      console.log(err);
    }
  };
};
