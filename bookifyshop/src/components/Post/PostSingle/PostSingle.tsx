import React, { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import { IAddCart, IAddFavorite, IPostItem } from 'src/interface/interface';

import {
  ADD_TO_CART,
  ADD_TO_CART_AGAIN,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from 'src/actions/actions';

import { ReactComponent as FavoriteIcon } from 'src/assets/icons/FavoriteIcon.svg';

import Button from 'src/components/Common/Button';
import LableText from 'src/components/Common/LableText';
import TabMenu from 'src/components/Common/TabMenu';
import Rating from 'src/components/Common/Rating';

import 'src/scss/App.scss';
import { useNavigate } from 'react-router-dom';
import { ROUTE_SIGN_IN } from 'src/utils/routes';

const PostSingle: FC<IPostItem> = (props) => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const navigate = useNavigate();

  const favorites: IAddFavorite[] = useSelector(({ favorites }) => favorites);
  const cart: IAddCart[] = useSelector(({ cart }) => cart);
  const IsAuthenticated: boolean = useSelector(({ IsAuthenticated }) => IsAuthenticated);

  const { ...state } = props;

  const [toggleState, setToggleState] = useState(1);

  const addFavorite: IAddFavorite = { ...state };

  const addCart: IAddCart = { counter: 1, ...state };

  const isFavorites = favorites.some((post) => post.isbn13 === addFavorite.isbn13);
  const isCarts = cart.some((post) => post.isbn13 === addCart.isbn13);

  const handleFavoriteClick = () => {
    if (isFavorites) {
      dispatch(REMOVE_FROM_FAVORITES(addFavorite));
    } else {
      dispatch(ADD_TO_FAVORITES(addFavorite));
    }
  };

  const handleCartClick = () => {
    if (isCarts) {
      dispatch(ADD_TO_CART_AGAIN(addCart));
    } else {
      dispatch(ADD_TO_CART(addCart));
    }
  };

  const handleAuthenticated = () => {
    navigate(ROUTE_SIGN_IN)
  }

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
            <FavoriteIcon onClick={IsAuthenticated ? handleFavoriteClick : handleAuthenticated} />
          </button>
          <img src={props.image} alt="" />
        </div>
        <div className="book-description__details">
          <div className="book-description__price">
            <div>{props.price}</div>
            <Rating rating={props.rating} />
          </div>
          <div className="book-description__content">
            <LableText
              text1="Authors"
              text2={props.authors}
              onChange={() => {}}
            />
            <LableText
              text1="Publisher"
              text2={props.publisher}
              text3={props.year}
              onChange={() => {}}
            />
            <LableText
              text1="Language"
              text2={props.language}
              onChange={() => {}}
            />
            <LableText
              text1="Format"
              text2="Paper book / ebook (PDF)"
              onChange={() => {}}
            />
          </div>
          <div className="book-description__btn">
            <Button type="button" onClick={handleCartClick}>
              add to card
            </Button>
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
          ? props.desc
          : toggleState === 2
          ? props.authors
          : toggleState === 3
          ? 'No reviews'
          : ''}
      </div>
    </div>
  );
};

export default PostSingle;