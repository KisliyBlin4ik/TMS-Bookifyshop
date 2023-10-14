import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTE_BOOK } from 'src/utils/routes';

import { IAddCart, IAddFavorite } from 'src/interface/interface';

import { ReactComponent as FavoriteIcon } from 'src/assets/icons/FavoriteIcon.svg';

import Rating from 'src/components/Common/Rating';

import 'src/scss/App.scss';

const FavoriteItem: FC<IAddFavorite> = (props) => {
  const navigate = useNavigate();

  const { ...state } = props;

  return (
    <div className="formFavoriteItem">
      <div className="favoriteItem__description">
        <div
          className="favoriteItem__image"
          onClick={() => {
            navigate(`${ROUTE_BOOK}/${props.isbn13}`, { state });
          }}
        >
          <img src={props.image} alt="" />
        </div>
        <div className="favoriteItem__details">
          <div>
            <div className="favoriteItem__title">{props.title}</div>
            <div className="favoriteItem__author">
              {props.authors},{props.year}
            </div>
          </div>
          <div className="favoriteItem__amount">
            <div>{props.price}</div>
            <Rating rating={props.rating} />
          </div>
        </div>
      </div>
      <div className="favoriteItem__icon"><FavoriteIcon/></div>
    </div>
  );
};

export default FavoriteItem;
