import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { DELETE_POST } from 'src/actions/actions';
import { useSelector, useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import 'src/scss/App.scss';
import { ROUTE_HOME } from 'src/utils/routes';

const HeaderLogo = () => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();

  const navigate = useNavigate();

  const logo = 'Bookifyshop';
  const upperCaseLogo = logo.toUpperCase();

  return (
    // <div className="logo" onClick={() => dispatch(DELETE_POST(navigate, {}))}>
    //   {upperCaseLogo}
    // </div>
    <div className="logo">
      <Link to={ROUTE_HOME}>{upperCaseLogo}</Link>
    </div>
    // svg формат?
  );
};

export default HeaderLogo;
