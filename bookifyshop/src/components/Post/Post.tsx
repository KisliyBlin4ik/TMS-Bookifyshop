import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { IPost } from 'src/interface/interface';
import { ROUTE_BOOK } from 'src/utils/routes';

import 'src/scss/App.scss';

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
