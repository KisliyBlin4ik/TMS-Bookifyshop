import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { IAddCart } from 'src/interface/interface';

import CartItem from 'src/components/CartItem';
import CartTotal from 'src/components/CartTotal';
import PageTemplate from 'src/components/PageTemplate';

const CartPage = () => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();

  const cart: IAddCart[] = useSelector(({ cart }) => cart);
  console.log(cart);

  useEffect(() => {
    dispatch({ type: 'SET_LOADING', payload: false });
  }, []);

  return (
    <>
      <PageTemplate title="Cart page" customClass="cartPage">
        {cart.map(
          (
            {
              image,
              title,
              price,
              authors,
              year,
              isbn10,
              isbn13,
              subtitle,
              url,
              counter,
            },
            index
          ) => (
            <CartItem
              key={index}
              image={image}
              title={title}
              subtitle={subtitle}
              price={price}
              authors={authors}
              year={year}
              isbn10={isbn10}
              isbn13={isbn13}
              url={url}
              counter={counter}
            />
          )
        )}
        <CartTotal />
      </PageTemplate>
    </>
  );
};

export default CartPage;
