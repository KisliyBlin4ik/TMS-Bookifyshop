import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { IAddCart } from 'src/utils/interface';

import CartItem from 'src/components/Modules/CartItem';
import CartTotal from 'src/components/Modules/CartTotal';
import PageTemplate from 'src/components/ModulesForPages/PageTemplate';

import './_CartPage.scss';

const CartPage = () => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();

  const cart: IAddCart[] = useSelector(({ cart }) => cart);

  useEffect(() => {
    dispatch({ type: 'SET_LOADING', payload: false });
  }, []);

  return (
    <>
      <PageTemplate title="Cart page" customClass="cartPage">
        {cart.map((cardItem, index) => (
          <CartItem key={index} {...cardItem} />
        ))}
        <CartTotal />
      </PageTemplate>
    </>
  );
};

export default CartPage;
