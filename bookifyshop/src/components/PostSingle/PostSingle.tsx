import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useLocation } from 'react-router-dom';

import { IAddCart, IPost, IPosts } from 'src/interface/interface';

import {
  ADD_CART,
  ADD_TO_FAVORITES,
  FETCH_POST,
  REMOVE_FROM_FAVORITES,
} from 'src/actions/actions';

import Button from '../Button';
import LableText from '../LableText';
import { ReactComponent as FavoriteIcon } from '../../assets/icons/FavoriteIcon.svg';

import 'src/scss/App.scss';

const PostSingle = () => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const location = useLocation();
  const [addC, setAddC] = useState({});
  const { image, isbn13, price, subtitle, title, url }: IPosts = location.state;

  const favorites: IAddCart[] = useSelector(({ favorites }) => favorites);

  const {
    authors,
    desc,
    error,
    isbn10,
    language,
    pages,
    publisher,
    rating,
    year,
  }: IPost = useSelector(({ post }) => post);

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
  };

  const isFavorites = favorites.some((post) => post.isbn13 === addCart.isbn13);

  const handleFavoriteClick = () => {
    // console.log(addCart);
    
    if (isFavorites) {
      dispatch(REMOVE_FROM_FAVORITES(addCart));
    } else {
      dispatch(ADD_TO_FAVORITES(addCart));
    }
  };

  // image, title, price, authors, year, isbn10, isbn 13
  useEffect(() => {
    setAddC(addCart);
    dispatch(FETCH_POST(isbn13));
  }, []);

  return (
    <div className="post-single">
      <h1>{title}</h1>
      <div className="post-single__book-description">
        <div className="book-description__image">
          <button className={`book-description__icon ${isFavorites ? 'book-description__iconStyle' : ''}`}>
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
            <LableText text1="Authors" text2={authors} />
            <LableText text1="Publisher" text2={publisher} text3={year} />
            <LableText text1="Language" text2={language} />
            <LableText text1="Format" text2="Paper book / ebook (PDF)" />
          </div>
          <div className="book-description__btn">
            <Button
              type="button"
              content="add to card"
              onClick={() => dispatch(ADD_CART(addCart))}
            />
            {/* addCart = image, title, price, authors, year, isbn10, isbn 13*/}
            <p>Preview book</p>
            {/* ссылка из url */}
          </div>
        </div>
      </div>
      <div>TabMenu</div>
      {/* доделать табы */}
      <div className="post-single__text">{desc}</div>
    </div>
  );
};

export default PostSingle;
