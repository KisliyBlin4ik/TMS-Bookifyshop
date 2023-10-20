import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import { ReactComponent as SearchIcon } from 'src/assets/icons/SearchIcon.svg';
import { ReactComponent as CancelIcon } from 'src/assets/icons/CancelIcon.svg';

import Button from '../Common/Button';
import Input from '../Common/Input';
import HeaderLogo from './HeaderLogo';
import HeaderNavBar from './HeaderNavBar';
import { ROUTE_SEARCH } from 'src/utils/routes';

const HeaderMenu = () => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    navigate(`${ROUTE_SEARCH}/${searchValue}`)
    // dispatch(SEARCH_POST(navigate, searchValue));
  };

  const handleReset = () => {
    setSearchValue('');
  };

  return (
    <header>
      <HeaderLogo/>
      <form id='form_2' onSubmit={handleSubmit}>
        <Input type="text" placeholder="Search..." value={searchValue} onChange={setSearchValue}/>
        <Button type="submit" customClass='form-2__searchBtn form-2__Btn'>
          <SearchIcon/>
        </Button>
        <Button type="reset" customClass='form-2__resetBtn form-2__Btn' onClick={handleReset}>
          <CancelIcon/>
        </Button>
      </form>
      <HeaderNavBar/>
    </header>
  );
};

export default HeaderMenu;
