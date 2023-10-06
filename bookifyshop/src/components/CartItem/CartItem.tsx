import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTE_BOOK } from 'src/utils/routes';

import { IAddCart } from 'src/interface/interface';

import 'src/scss/App.scss';

const CartItem: FC<IAddCart> = ({
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
    <div className="formCartItem">
      <div className="cartItem__description">
        <div
          className="cartItem__image"
          onClick={() => {
            navigate(`${ROUTE_BOOK}/${isbn13}`, { state: { image, isbn13, price, subtitle, title, url } });
            console.log('click');
          }}
        >
          <img src={image} alt="" />
        </div>
        <div className="cartItem__details">
          <div>
            <div className="cartItem__title">{title}</div>
            <div className="cartItem__author">
              {authors},{year}
            </div>
          </div>
          <div className="cartItem__amount">1 x 2</div>
        </div>
      </div>
      <div className="cartItem__price">{price}</div>
      <div className="cartItem__delete">x</div>
    </div>
  );
};

export default CartItem;
