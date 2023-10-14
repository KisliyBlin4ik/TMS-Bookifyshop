import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { IPostItem } from 'src/interface/interface';
import { ROUTE_BOOK } from 'src/utils/routes';

import Rating from '../../Common/Rating';

import 'src/scss/App.scss';

const PostItem: FC<IPostItem> = (props) => {
  const navigate = useNavigate();

  const handlePostClick = () => {
    const { ...state } = props;
    navigate(`${ROUTE_BOOK}/${state.isbn13}`, { state });
  };

  return (
    <div className="formPost" onClick={handlePostClick}>
      <img src={props.image} alt="" />
      <div className="formPost__content">
        <div className="formPost__header">
          <div className="formPost__title">{props.title}</div>
          <div className="formPost__publisher">
            by {props.publisher}, {props.year}
          </div>
        </div>
        <div className="formPost__footer">
          <div className="formPost__price">{props.price}</div>
          <Rating rating={props.rating} />
        </div>
      </div>
    </div>
  );
};

export default PostItem;
