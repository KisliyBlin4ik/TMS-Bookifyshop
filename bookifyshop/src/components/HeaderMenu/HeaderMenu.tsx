import React, { useState } from 'react';

import HeaderLogo from './HeaderLogo';
import Input from '../Input';
import HeaderNavBar from './HeaderNavBar';

import 'src/scss/App.scss';

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
