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
import LabelText from 'src/components/Common/LabelText';
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
  const [moreDetailsBtn, setMoreDetailsBtn] = useState(false);
  console.log(moreDetailsBtn);
  

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
  const moreDetails = (open: boolean) => {
    setMoreDetailsBtn(open)
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
            <LabelText
              text1="Authors"
              text2={props.authors}
            />
            <LabelText
              text1="Publisher"
              text2={props.publisher}
              text3={props.year}
            />
            <LabelText
              text1="Language"
              text2={props.language}
            />
            <LabelText
              text1="Format"
              text2="Paper book / ebook (PDF)"
            />
          </div>
          <div className="book-description__btn">
            <Button type="button" onClick={handleCartClick}>
              add to card
            </Button>
            <Button type="button" onClick={()=>{}}>
              {props.pdf ? <a href={props.pdf['Free eBook']}>Preview book</a> : <p>Preview book</p>}
            </Button>
          </div>
        </div>
      </div>
      <TabMenu
        text1="Description"
        text2="Authors"
        text3={<a href={`https://www.amazon.com/dp/${props.isbn10}/?tag=isbndir-20#customerReviews`}>Reviews</a>}
        onChange={toggleTab}
      />
      <div className="post-single__text">
        {toggleState === 1
          ? props.desc
          : toggleState === 2
          ? props.authors
          : toggleState === 3
          ? ''
          : ''}
      </div>
    </div>
  );
};

export default PostSingle;