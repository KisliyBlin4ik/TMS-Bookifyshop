import React, { useEffect, FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useLocation } from 'react-router-dom';
import { IPost, IPosts } from 'src/interface/interface';

import 'src/scss/App.scss';
import Button from '../Button';
import { FETCH_POST } from 'src/actions/actions';
import LableText from '../LableText';

const PostSingle = () => {
  const location = useLocation();
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
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
  console.log(isbn13);

  useEffect(() => {
    dispatch(FETCH_POST(isbn13));
  }, []);

  return (
    <div className="post-single">
      <h1>{title}</h1>
      <div className="">
        <img src={image} alt="" />
      </div>
      <div className="block-book">
        <div className="block-book__header">
          <div>{price}</div>
          <div>{rating}</div>
        </div>
        <div className="post-single__content">
          <LableText text1='Authors' text2={authors}/>
          <LableText text1='Publisher' text2={publisher} text3={year}/>
          <LableText text1='Language' text2={language}/>
          <LableText text1='Format' text2='Paper book / ebook (PDF)'/>
        </div>
        <div className="block-book__footer">
          <Button type="button" content="add to card" />
        </div>
      </div>
    </div>
  );
};

export default PostSingle;
