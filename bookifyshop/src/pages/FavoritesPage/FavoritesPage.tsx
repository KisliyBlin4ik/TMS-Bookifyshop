import React from 'react';
import { useSelector } from 'react-redux';

import PageTemplate from 'src/components/PageTemplate';
import Post from 'src/components/Post';
import { IAddCart, IPost, IPosts } from 'src/interface/interface';

const FavoritesPage = () => {
  const favorites: IPost[] = useSelector(({ favorites }) => favorites);
  // console.log(favorites);

  //добавить кнопку удаления поста из массива favorites(store)
  // добавить компонент FavoriteItem
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
