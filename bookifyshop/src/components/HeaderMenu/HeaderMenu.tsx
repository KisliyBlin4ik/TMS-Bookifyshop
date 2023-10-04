import React, { useState } from 'react';

import './HeaderMenu.scss';
import HeaderLogo from './HeaderLogo';
import Input from '../Input';
import HeaderNavBar from './HeaderNavBar';

const HeaderMenu = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <header>
      <HeaderLogo></HeaderLogo>
      <Input type="search" placeholder='Search...' value={searchValue} onChange={setSearchValue}></Input>
      <HeaderNavBar></HeaderNavBar>
    </header>
  );
};

export default HeaderMenu;
