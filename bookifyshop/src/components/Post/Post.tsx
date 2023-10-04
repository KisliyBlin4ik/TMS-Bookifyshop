import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { IPost } from 'src/interface/interface';

import './Post.scss';
import { ROUTE_BOOK } from 'src/utils/routes';

const Post: FC<IPost> = ({ id, image, title, date }) => {
  const navigate = useNavigate();

  return (
    <div
      className="formPost"
      onClick={() => {
        navigate(`${ROUTE_BOOK}/${id}`, { state: { image, title, date } });
      }}
    >
      <img src={image} alt="" />
      <div>{title}</div>
      <div>{date}</div>
      <div className="formPost__footer">
        <div>{id}</div>
        <div>12345</div>
      </div>
    </div>
  );
};

export default Post;
