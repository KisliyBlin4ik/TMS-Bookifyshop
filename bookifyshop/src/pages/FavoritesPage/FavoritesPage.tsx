import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { useNavigate } from 'react-router-dom';

import { IAddFavorite } from 'src/utils/interface';

import { ROUTE_SIGN_IN } from 'src/utils/routes';

import PageTemplate from 'src/components/ModulesForPages/PageTemplate';
import FavoriteItem from 'src/components/Modules/FavoriteItem';

const FavoritesPage = () => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const navigate = useNavigate();

  const favorites: IAddFavorite[] = useSelector(({ favorites }) => favorites);
  const IsAuthenticated: boolean = useSelector(({ IsAuthenticated }) => IsAuthenticated);

  useEffect(() => {
    dispatch({ type: 'SET_LOADING', payload: false });
    if (!IsAuthenticated) {
      navigate(ROUTE_SIGN_IN);
    }
  }, []);

  return (
    <>
      <PageTemplate title="Favorites page" customClass="favoritesPage">
        {favorites.map((favoriteItem, index) => (
          <FavoriteItem key={index} {...favoriteItem} />
        ))}
        {/* возможно добавить слайдер с предложением книг */}
      </PageTemplate>
    </>
  );
};

export default FavoritesPage;
