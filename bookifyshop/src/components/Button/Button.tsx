import React, { FC, ReactNode } from 'react';

import { IButton } from 'src/interface/interface';

import 'src/scss/App.scss';

const Button: FC<IButton> = ({ type, content, children, onClick }) => {
  return (
    <button type={type} onClick={onClick}>
      {content ? content : children ? children : ''}
    </button>
  );
};

export default Button;
