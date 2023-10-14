import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { IAddCart, IAddFavorite, IPostItem, IPosts } from 'src/interface/interface';

import PageTemplate from 'src/components/PageTemplate';
import Post from 'src/components/Post/PostItem';
import FavoriteItem from 'src/components/Favorite/FavoriteItem';

const FavoritesPage = () => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();

  const favorites: IAddFavorite[] = useSelector(({ favorites }) => favorites);

  useEffect(() => {
    dispatch({ type: 'SET_LOADING', payload: false });
  }, []);
  //добавить кнопку удаления поста из массива favorites(store)

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
