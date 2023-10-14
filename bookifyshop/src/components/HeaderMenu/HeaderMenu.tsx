import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import { SEARCH_POST } from 'src/actions/actions';

import Button from '../Common/Button';
import Input from '../Common/Input';
import HeaderLogo from './HeaderLogo';
import HeaderNavBar from './HeaderNavBar';

const HeaderMenu = () => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(SEARCH_POST(navigate, searchValue));
  };

  const handleReset = () => {
    setSearchValue('');
  };

  return (
    <header>
      <HeaderLogo></HeaderLogo>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={setSearchValue}
        ></Input>
        <Button type="submit">search</Button>
        <Button type="reset" onClick={handleReset}>
          reset
        </Button>
      </form>
      <HeaderNavBar></HeaderNavBar>
    </header>
  );
};

export default HeaderMenu;
