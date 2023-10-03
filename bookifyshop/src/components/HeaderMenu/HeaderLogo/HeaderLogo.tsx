import React from 'react';

import './HeaderLogo.scss';

const HeaderLogo = () => {
  const logo = 'Bookifyshop';
  const upperCaseLogo = logo.toUpperCase();

  return (
    <a href="/">{upperCaseLogo}</a>
    // svg формат
  );
};

export default HeaderLogo;
