import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import {
    ROUTE_ACCOUNT,
    ROUTE_CART,
    ROUTE_FAVORITES,
    ROUTE_HOME,
    ROUTE_SIGN_IN,
} from 'src/utils/routes';

import { IBurgerMenu } from 'src/utils/interface';

import { SET_AUTHENTICATED } from 'src/actions/authenticated';

import { ReactComponent as CloseIcon } from 'src/assets/icons/CloseIcon.svg';

import Button from 'src/components/Elements/Button';
import HeaderSearch from '../HeaderSearch';

const BurgerMenu: FC<IBurgerMenu> = ({ handleBurger, handleSwitchBurger }) => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const navigate = useNavigate();
  
  const IsAuthenticated = useSelector(({ IsAuthenticated }) => IsAuthenticated);

  const logOut = () => {
    dispatch(SET_AUTHENTICATED(false));
    navigate(ROUTE_SIGN_IN);
  };
  const signIn = () => {
    navigate(ROUTE_SIGN_IN);
  };

  return (
    <div className={`burgerMenu ${handleBurger ? 'open' : 'close'}`}>
      <div className="burgerMenu__header">
        <CloseIcon onClick={handleSwitchBurger} />
      </div>
      <div className="burgerMenu__content">
        <HeaderSearch formID='3'/>
        <Button type="button" onClick={()=>navigate(ROUTE_HOME)}>Home</Button>
        <Button type="button" onClick={()=>navigate(ROUTE_FAVORITES)}>Favorites</Button>
        <Button type="button" onClick={()=>navigate(ROUTE_CART)}>Cart</Button>
        <Button type="button" onClick={()=>navigate(ROUTE_ACCOUNT)}>Account</Button>
      </div>
      <div className="burgerMenu__footer">
        {IsAuthenticated ? 
        <Button type="button" onClick={logOut}>Log out</Button> 
        : 
        <Button type="button" onClick={signIn}>Sign in</Button>}
      </div>
    </div>
  );
};

export default BurgerMenu;
