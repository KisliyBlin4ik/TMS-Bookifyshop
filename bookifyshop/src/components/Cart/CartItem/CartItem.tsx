import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import { ROUTE_BOOK } from 'src/utils/routes';

import { IAddCart } from 'src/interface/interface';

import { REMOVE_FROM_CART } from 'src/actions/actions';

import { ReactComponent as CloseIcon } from 'src/assets/icons/CloseIcon.svg';
import { ReactComponent as DeleteIcon } from 'src/assets/icons/DeleteIcon.svg';

import Button from '../../Common/Button';
import CartCounter from '../CartCounter';

import 'src/scss/App.scss';

const CartItem: FC<IAddCart> = ({ image, title, price, authors, year, isbn10, isbn13, subtitle, url, counter }) => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const navigate = useNavigate();

  const priceNumber = parseFloat(price.replace('$', ''));
  const totalCost = priceNumber * counter;

  const handleImageClick = () => {
    navigate(`${ROUTE_BOOK}/${isbn13}`, {
      state: { image, isbn13, price, subtitle, title, url },
    });
  };

  const handleRemoveFromCart = () => {
    dispatch(REMOVE_FROM_CART({ image, title, price, authors, year, isbn10, isbn13, url, subtitle, counter }));
  };

  return (
    <div className="formCartItem">
      <div className="cartItem__description">
        <div className="cartItem__image" onClick={handleImageClick}>
          <img src={image} alt="" />
        </div>
        <div className="cartItem__details">
          <div>
            <div className="cartItem__title">{title}</div>
            <div className="cartItem__author">
              {authors},{year}
            </div>
          </div>
          <div className="cartItem__amount">
            <CartCounter counter={counter} isbn13={isbn13} />
          </div>
        </div>
      </div>
      <div className="cartItem__price">{`$${totalCost}`}</div>
      <div className="cartItem__delete">
        <Button type="button" onClick={handleRemoveFromCart}>
          <DeleteIcon />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
