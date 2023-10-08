import React, { FC, ReactNode } from 'react';

import { IButton } from 'src/interface/interface';

import 'src/scss/App.scss';

const Button: FC<IButton> = ({ type, content, onClick }) => {
  return (
    <button type={type} onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;
