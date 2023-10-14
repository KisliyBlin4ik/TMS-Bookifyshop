import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { IAddCart, IPostItem, IPosts } from 'src/interface/interface';

import PageTemplate from 'src/components/PageTemplate';
import Post from 'src/components/Post/PostItem';

const FavoritesPage = () => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();

  const favorites: IPostItem[] = useSelector(({ favorites }) => favorites);

  useEffect(() => {
    dispatch({ type: 'SET_LOADING', payload: false });
  }, []);
  //добавить кнопку удаления поста из массива favorites(store)

  return (
    <>
      <PageTemplate title="Favorites page" customClass="favoritesPage">
        {favorites.map(
          (
            {
              authors,
              desc,
              error,
              image,
              isbn10,
              isbn13,
              language,
              pages,
              pdf,
              price,
              publisher,
              rating,
              subtitle,
              title,
              url,
              year,
            },
            index
          ) => (
            <Post
              key={index}
              authors={authors}
              desc={desc}
              error={error}
              image={image}
              isbn10={isbn10}
              isbn13={isbn13}
              language={language}
              pages={pages}
              pdf={pdf}
              price={price}
              publisher={publisher}
              rating={rating}
              subtitle={subtitle}
              title={title}
              url={url}
              year={year}
            />
          )
        )}
      </PageTemplate>
    </>
  );
};

export default FavoritesPage;
