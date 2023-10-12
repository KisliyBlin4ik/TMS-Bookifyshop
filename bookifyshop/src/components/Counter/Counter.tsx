import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { ICounter } from 'src/interface/interface';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import {
  DECREMENT_COUNTER_TO_CART,
  INCREMENT_COUNTER_TO_CART,
} from 'src/actions/actions';

import { ReactComponent as Plus } from 'src/assets/icons/PlusIcon.svg';
import { ReactComponent as Minus } from 'src/assets/icons/MinusIcon.svg';

import 'src/scss/App.scss';

const Counter: FC<ICounter> = ({ counter, isbn13 }) => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();

  const increaseCounter = () => {
    const newCounter = counter + 1;
    dispatch(INCREMENT_COUNTER_TO_CART(isbn13, newCounter));
  };
  
  const decreaseCounter = () => {
    const newCounter = counter - 1;
    dispatch(DECREMENT_COUNTER_TO_CART(isbn13, newCounter));
  };

  return (
    <div className="formCounter">
      <button onClick={decreaseCounter}>
        <Minus />
      </button>
      <div className="formCounter__counter">{counter}</div>
      <button onClick={increaseCounter}>
        <Plus />
      </button>
    </div>
  );
};

export default Counter;
