import React, { FC, ReactNode } from 'react';

import { IButton } from 'src/interface/interface';

import './Button.scss'

const Button: FC<IButton> = ({ type, content }) => {
  return <button type={type}>{content}</button>;
};

export default Button;
