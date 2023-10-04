import React, { useEffect, FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { Routes, Route } from 'react-router-dom';

import { FETCH_POSTS } from './actions/actions';

import HomePage from './pages/HomePage';
import BookPage from './pages/BookPage';
import AccountPage from './pages/AccountPage';
import CartPage from './pages/CartPage';
import FavoritesPage from './pages/FavoritesPage';
import SignInPage from './pages/SignInPage';
import SearchPage from './pages/SearchPage';

import './App.scss';

function App() {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();

  useEffect(() => {
    dispatch(FETCH_POSTS());
  }, []);

  return (
    <div className="wrapper">
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="/book" element={<BookPage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/favorites" element={<FavoritesPage />}></Route>
          <Route path="/account" element={<AccountPage />}></Route>
          <Route path="/sign-in" element={<SignInPage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
