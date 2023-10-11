import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { IPost, IPosts } from 'src/interface/interface';
import { ROUTE_BOOK } from 'src/utils/routes';

import 'src/scss/App.scss';
import Rating from '../Rating';

const Post: FC<IPost> = ({
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
  const navigate = useNavigate();

  return (
    <div
      className="formPost"
      onClick={() => {
        navigate(`${ROUTE_BOOK}/${isbn13}`, {
          state: {
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
          },
        });
      }}
    >
      <img src={image} alt="" />
      <div className="formPost__content">
        <div className="formPost__header">
          <div className="formPost__title">{title}</div>
          <div className="formPost__publisher">
            by {publisher}, {year}
          </div>
        </div>
        <div className="formPost__footer">
          <div className="formPost__price">{price}</div>
          <Rating rating={rating} />
        </div>
      </div>
    </div>
  );
};

export default Post;
