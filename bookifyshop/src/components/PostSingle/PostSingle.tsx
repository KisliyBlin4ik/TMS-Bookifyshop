import React, { useEffect,useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useLocation } from 'react-router-dom';

import { IPost, IPosts } from 'src/interface/interface';

import { ADD_CART, FETCH_POST } from 'src/actions/actions';

import Button from '../Button';
import LableText from '../LableText';

import 'src/scss/App.scss';

const PostSingle = () => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const location = useLocation();
  const [addC, setAddC] = useState({})
  const { image, isbn13, price, subtitle, title, url }: IPosts = location.state;

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

  const addCart = {
    image,
    title,
    price,
    authors,
    year,
    isbn10,
    isbn13,
  }
  
  // image, title, price, authors, year, isbn10, isbn 13
  useEffect(() => {
    setAddC(addCart)
    dispatch(FETCH_POST(isbn13));
  }, []);
  console.log(addCart);

  return (
    <div className="post-single">
      <h1>{title}</h1>
      <div className="post-single__book-description">
        <div className="book-description__image">
          <div className="book-description__icon">
            <img src="" alt="" />
          </div>
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
            <Button type="button" content="add to card" onClick={() => dispatch(ADD_CART(addCart))}/>{/* addCart = image, title, price, authors, year, isbn10, isbn 13*/}
            <p>Preview book</p>{/* ссылка из url */}
          </div>
        </div>
      </div>
      <div>TabMenu</div>{/* доделать табы */}
      <div className='post-single__text'>{desc}</div>
    </div>
  );
};

export default PostSingle;
