import React from 'react';

import HeaderLogo from './HeaderLogo';
import HeaderNavBar from './HeaderNavBar';
import HeaderSearch from './HeaderSearch';

const HeaderMenu = () => {
  return (
    <header>
      <HeaderLogo />
      <HeaderSearch formID='2'/>
      <HeaderNavBar />
    </header>
  );
};

export default HeaderMenu;
