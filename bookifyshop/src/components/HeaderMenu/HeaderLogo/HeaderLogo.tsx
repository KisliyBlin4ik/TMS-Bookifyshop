import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DELETE_POST } from 'src/actions/actions';
import { useSelector, useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import 'src/scss/App.scss';

const HeaderLogo = () => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();

  const navigate = useNavigate();

  const logo = 'Bookifyshop';
  const upperCaseLogo = logo.toUpperCase();

  return (
    <div className="logo" onClick={() => dispatch(DELETE_POST(navigate, {}))}>
      {upperCaseLogo}
    </div>
    // svg формат?
  );
};

export default HeaderLogo;
