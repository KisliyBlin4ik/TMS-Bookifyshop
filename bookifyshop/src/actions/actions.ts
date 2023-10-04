import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
// import instance from "src/axiosConfig.js";

export const FETCH_POSTS = () => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    const activateUser = async () => {
      try {
        const response = await fetch(
          'https://64f101948a8b66ecf77a538e.mockapi.io/postsForReact/posts'
        );
        if (!response.ok) {
          throw new Error('Ошибка при запросе');
        }
        const data = await response.json();
        dispatch({ type: 'GET_POSTS', payload: data });
      } catch (err) {
        console.log(err);
      }
    };
    activateUser();
  };
};
