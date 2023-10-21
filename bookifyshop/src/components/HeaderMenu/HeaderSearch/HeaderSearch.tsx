import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as SearchIcon } from 'src/assets/icons/SearchIcon.svg';
import { ReactComponent as CancelIcon } from 'src/assets/icons/CancelIcon.svg';
import { ROUTE_SEARCH } from 'src/utils/routes';
import Input from 'src/components/Common/Input';
import Button from 'src/components/Common/Button';

const HeaderSearch = ({formID}: any) => {
  const navigate = useNavigate();
    
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (searchValue) {
      navigate(`${ROUTE_SEARCH}/${searchValue}`)
    } 
  };

  const handleReset = () => {
    setSearchValue('');
  };

  return (
    <form id={`form-${formID}`} onSubmit={handleSubmit}>
        <Input type="text" placeholder="Search..." value={searchValue} onChange={setSearchValue}/>
        <Button type="submit" customClass='form-2__searchBtn form-2__Btn'>
          <SearchIcon/>
        </Button>
        <Button type="reset" customClass='form-2__resetBtn form-2__Btn' onClick={handleReset}>
          <CancelIcon/>
        </Button>
    </form>
  )
}

export default HeaderSearch