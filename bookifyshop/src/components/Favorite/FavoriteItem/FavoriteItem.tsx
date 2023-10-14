import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTE_BOOK } from 'src/utils/routes';

import { IAddCart } from 'src/interface/interface';

import 'src/scss/App.scss';

const FavoriteItem: FC<IAddCart> = ({
  image,
  title,
  price,
  authors,
  year,
  isbn10,
  isbn13,
  subtitle,
  url,
}) => {
  const navigate = useNavigate();

  return (
    <div className="formFavoriteItem">
      <div className="favoriteItem__description">
        <div
          className="favoriteItem__image"
          onClick={() => {
            navigate(`${ROUTE_BOOK}/${isbn13}`, {
              state: { image, isbn13, price, subtitle, title, url },
            });
            console.log('click');
          }}
        >
          <img src={image} alt="" />
        </div>
        <div className="favoriteItem__details">
          <div>
            <div className="favoriteItem__title">{title}</div>
            <div className="favoriteItem__author">
              {authors},{year}
            </div>
          </div>
          <div className="favoriteItem__amount">1 x 2</div>
        </div>
      </div>
      <div className="favoriteItem">{price}</div>
      <div className="favoriteItem">1</div>
    </div>
  );
};

export default FavoriteItem;
