import React from 'react';

import HeaderLogo from '../../Elements/HeaderLogo';
import HeaderNavBar from '../../Elements/HeaderNavBar';
import HeaderSearch from '../../Modules/HeaderSearch';

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
