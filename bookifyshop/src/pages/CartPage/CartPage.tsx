import React from 'react';
import { useSelector } from 'react-redux';

import CartItem from 'src/components/CartItem';
import CartTotal from 'src/components/CartTotal';
import PageTemplate from 'src/components/PageTemplate';
import { IAddCart } from 'src/interface/interface';

const CartPage = () => {
  const cart: IAddCart[] = useSelector(({ cart }) => cart);

  return (
    <>
      <PageTemplate title="Cart page" customClass="cartPage">
        {cart.map(
          ({ image, title, price, authors, year, isbn10, isbn13, subtitle, url }, index) => (
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
            />
          )
        )}
        <CartTotal/>
      </PageTemplate>
    </>
  );
};

export default CartPage;
