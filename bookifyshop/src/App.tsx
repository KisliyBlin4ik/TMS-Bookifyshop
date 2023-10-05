import React, { useEffect, FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { DELETE_POST, FETCH_POSTS } from './actions/actions';

import HomePage from './pages/HomePage';
import BookPage from './pages/BookPage';
import AccountPage from './pages/AccountPage';
import CartPage from './pages/CartPage';
import FavoritesPage from './pages/FavoritesPage';
import SignInPage from './pages/SignInPage';
import SearchPage from './pages/SearchPage';

import {
  ROUTE_ACCOUNT,
  ROUTE_BOOK_PAGE,
  ROUTE_CART,
  ROUTE_FAVORITES,
  ROUTE_HOME,
  ROUTE_SEARCH,
  ROUTE_SIGN_IN,
} from './utils/routes';

import './scss/App.scss';

function App() {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(DELETE_POST(navigate, {}))
    navigate('/home');
    dispatch(FETCH_POSTS());
  }, []);

  return (
    <div className="wrapper">
      <div className="app">
        <Routes>
          <Route path={ROUTE_HOME} element={<HomePage />}></Route>
          <Route path={ROUTE_SEARCH} element={<SearchPage />}></Route>
          <Route path={ROUTE_BOOK_PAGE} element={<BookPage />}></Route>
          <Route path={ROUTE_CART} element={<CartPage />}></Route>
          <Route path={ROUTE_FAVORITES} element={<FavoritesPage />}></Route>
          <Route path={ROUTE_ACCOUNT} element={<AccountPage />}></Route>
          <Route path={ROUTE_SIGN_IN} element={<SignInPage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
