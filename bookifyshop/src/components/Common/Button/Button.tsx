import React, { FC, ReactNode } from 'react';

import { IButton } from 'src/interface/interface';

// import 'src/scss/App.scss';

const Button: FC<IButton> = ({ type= 'button', content, children, customClass, onClick }) => {
  return (
    <button type={type} onClick={onClick} className={customClass}>
      {content ? content : children ? children : ''}
    </button>
  );
};

export default Button;
