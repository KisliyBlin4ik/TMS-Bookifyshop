import React, { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useLocation } from 'react-router-dom';

import { IAddCart, IAddFavorite, IPostItem } from 'src/interface/interface';

import {
  ADD_TO_CART,
  ADD_TO_CART_AGAIN,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from 'src/actions/actions';

import { ReactComponent as FavoriteIcon } from 'src/assets/icons/FavoriteIcon.svg';

import Button from '../../Common/Button';
import LableText from '../../LableText';
import TabMenu from '../../Common/TabMenu';

import 'src/scss/App.scss';

const PostSingle: FC<IPostItem> = ({
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
}) => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();

  const favorites: IAddFavorite[] = useSelector(({ favorites }) => favorites);
  const cart: IAddCart[] = useSelector(({ cart }) => cart);

  const [toggleState, setToggleState] = useState(1);

  const addFavorite: IAddFavorite = {
    image,
    title,
    price,
    authors,
    year,
    isbn10,
    isbn13,
    url,
    subtitle,
  };

  const counter = 1;

  const addCart: IAddCart = {
    image,
    title,
    price,
    authors,
    year,
    isbn10,
    isbn13,
    url,
    subtitle,
    counter,
  };

  const isFavorites = favorites.some(
    (post) => post.isbn13 === addFavorite.isbn13
  );

  const handleFavoriteClick = () => {
    console.log(addFavorite);

    if (isFavorites) {
      dispatch(REMOVE_FROM_FAVORITES(addFavorite));
    } else {
      dispatch(ADD_TO_FAVORITES(addFavorite));
    }
  };

  const isCarts = cart.some((post) => post.isbn13 === addFavorite.isbn13);

  const handleCartClick = () => {
    console.log(addFavorite);

    if (isCarts) {
      dispatch(ADD_TO_CART_AGAIN(addCart));
    } else {
      dispatch(ADD_TO_CART(addCart));
    }
  };

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <div className="post-single">
      <div className="post-single__book-description">
        <div className="book-description__image">
          <button
            className={`book-description__icon ${
              isFavorites ? 'book-description__iconStyle' : ''
            }`}
          >
            <FavoriteIcon onClick={handleFavoriteClick} />
          </button>
          <img src={image} alt="" />
        </div>
        <div className="book-description__details">
          <div className="book-description__price">
            <div>{price}</div>
            <div>{rating}</div>
          </div>
          <div className="book-description__content">
            <LableText text1="Authors" text2={authors} onChange={() => {}} />
            <LableText
              text1="Publisher"
              text2={publisher}
              text3={year}
              onChange={() => {}}
            />
            <LableText text1="Language" text2={language} onChange={() => {}} />
            <LableText
              text1="Format"
              text2="Paper book / ebook (PDF)"
              onChange={() => {}}
            />
          </div>
          <div className="book-description__btn">
            <Button
              type="button"
              content="add to card"
              onClick={handleCartClick}
            />
            <p>Preview book</p>
            {/* ссылка из url */}
          </div>
        </div>
      </div>
      <TabMenu
        text1="Description"
        text2="Authors"
        text3="Rviews"
        onChange={toggleTab}
      />
      <div className="post-single__text">
        {toggleState === 1
          ? desc
          : toggleState === 2
          ? authors
          : toggleState === 3
          ? 'No reviews'
          : ''}
      </div>
    </div>
  );
};

export default PostSingle;
