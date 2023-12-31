import React, { FC } from 'react';

import { IButton } from 'src/utils/interface';

const Button: FC<IButton> = ({ type= 'button', children, customClass, onClick }) => {
  return (
    <button type={type} onClick={onClick} className={customClass}>
      {children ? children : ''}
    </button>
  );
};

export default Button;
