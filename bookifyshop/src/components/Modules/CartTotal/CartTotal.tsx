import React from 'react';
import { useSelector } from 'react-redux';

import LabelText from '../../Elements/LabelText/LabelText';
import Button from 'src/components/Elements/Button';

const CartTotal = () => {
  const cart = useSelector(({ cart }) => cart);

  const sumTotal = cart
    .reduce((sum: any, item: any) => {
      const price = parseFloat(item.price.replace('$', ''));
      const subtotal = price * item.counter;
      return sum + subtotal;
    }, 0)
    .toFixed(2);

  const vatTotal = cart
    .reduce((sum: any, item: any) => {
      const subtotal = item.counter * 6.25;
      return sum + subtotal;
    }, 0)
    .toFixed(2);

  const total = (+sumTotal + +vatTotal).toFixed(2);

  return (
    <div className="cartTotal">
      <div>
        <LabelText text1="Sum total:" text2={`$${sumTotal}`} />
        <LabelText text1="VAT" text2={`$${vatTotal}`} />
      </div>
      <div>
        <LabelText text1="Total:" text2={`$${total}`} />
      </div>
      <Button type="button">check out</Button>
    </div>
  );
};

export default CartTotal;
