import React from 'react';

import LabelText from '../../LableText/LabelText';
import Button from '../../Common/Button';

import 'src/scss/App.scss';

const CartTotal = () => {
  return (
    <div className="cartTotal">
      <div>
        <LabelText text1="Sum total:" text2="$69" onChange={() => {}} />
        <LabelText text1="VAT" text2="$96" onChange={() => {}} />
      </div>
      <div>TOTAL</div>
      <Button type="button">check out</Button>
    </div>
  );
};

export default CartTotal;