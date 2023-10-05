import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { IPosts } from 'src/interface/interface';
import { ROUTE_BOOK } from 'src/utils/routes';

import 'src/scss/App.scss';

const Post: FC<IPosts> = ({ image, isbn13, price, subtitle, title, url }) => {
  const navigate = useNavigate();

  return (
    <div
      className="formPost"
      onClick={() => {
        navigate(`${ROUTE_BOOK}/${isbn13}`, { state: { image, isbn13, price, subtitle, title, url } });
      }}
    >
      <img src={image} alt="" />
      <div>{title}</div>
      {/* <div>{date}</div> */}
      <p>by {}, {}</p>
      <div className="formPost__footer">
        <div>{price}</div>
        <div>12345</div>
      </div>
    </div>
  );
};

export default Post;
