import React from 'react';
import { useSelector } from 'react-redux';

import PageTemplate from 'src/components/PageTemplate';
import Post from 'src/components/Post';
import { IAddCart, IPosts } from 'src/interface/interface';

const FavoritesPage = () => {
  const favorites: IAddCart[] = useSelector(({ favorites }) => favorites);
  // console.log(favorites);
  
//добавить кнопку удаления поста из массива favorites(store)
// добавить компонент FavoriteItem
  return (
    <>
      <PageTemplate title="Favorites page" customClass='favoritesPage'>
      {favorites.map(({ image, isbn13, price, subtitle, title, url }, index) => (
          <Post
            key={index}
            image={image}
            isbn13={isbn13}
            price={price}
            subtitle={subtitle}
            title={title}
            url={url}
          />
        ))}
      </PageTemplate>
    </>
  );
};

export default FavoritesPage;
