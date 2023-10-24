import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTE_BOOK } from 'src/utils/routes';

import { IAddFavorite } from 'src/utils/interface';

import { ReactComponent as FavoriteIcon } from 'src/assets/icons/FavoriteIcon.svg';

import Rating from 'src/components/Elements/Rating';

import Button from 'src/components/Elements/Button';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { REMOVE_FROM_FAVORITES } from 'src/actions/changeFavorites';

const FavoriteItem: FC<IAddFavorite> = (props) => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const navigate = useNavigate();

  const { ...state } = props;

  const handleRemoveFromCart = () => {
    dispatch(REMOVE_FROM_FAVORITES(state));
  };

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
      <div className="favoriteItem__icon">
        <Button type="button" onClick={handleRemoveFromCart}>
          <FavoriteIcon />
        </Button>
      </div>
    </div>
  );
};

export default FavoriteItem;
