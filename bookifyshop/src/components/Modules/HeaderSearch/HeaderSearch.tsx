import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import { ReactComponent as SearchIcon } from 'src/assets/icons/SearchIcon.svg';
import { ReactComponent as CancelIcon } from 'src/assets/icons/CancelIcon.svg';

import { ROUTE_BOOK, ROUTE_SEARCH } from 'src/utils/routes';

import { SEARCH_WITH_AUTOSUGGEST } from 'src/actions/search';

import Input from 'src/components/Elements/Input';
import Button from 'src/components/Elements/Button';

const HeaderSearch = ({formID}: any) => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const navigate = useNavigate();
    
  const [searchValue, setSearchValue] = useState('');
  const [isOpen, setIsOpen] = useState(true);

  const postAutosuggest = useSelector(({ postAutosuggest }) => postAutosuggest);
  
  const red = postAutosuggest.slice(0,5)

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (searchValue) {
      navigate(`${ROUTE_SEARCH}/${searchValue}`)
    } 
  };

  const handleReset = () => {
    setSearchValue('');
  };

  const itemClickHandler = (e: any) => {
    setIsOpen(false)
    const itemIsbn13 = red.find((item: any) => item.title === e.target.textContent)
    navigate(`${ROUTE_BOOK}/${itemIsbn13.isbn13}`, { state: itemIsbn13 });
  }

  const inputClickHandle = () => {
    setIsOpen(true)
  }

  useEffect (() => {
    if (searchValue) {
      dispatch(SEARCH_WITH_AUTOSUGGEST(searchValue))
    }
  }, [searchValue])

  return (
    <form id={`form-${formID}`} onSubmit={handleSubmit}>
        <Input type="text" placeholder="Search..." value={searchValue} onChange={setSearchValue} onClick={inputClickHandle}/>
        <Button type="submit" customClass='form-2__searchBtn form-2__Btn'>
          <SearchIcon/>
        </Button>
        <Button type="reset" customClass='form-2__resetBtn form-2__Btn' onClick={handleReset}>
          <CancelIcon/>
        </Button>
        <ul className='autocomplete'>
          {searchValue && isOpen ? red.map((item: any, index: any) => {
            return (
              <li key={index} className="autocomplete__item" onClick={itemClickHandler}>{item.title}</li>
            )
          }) : null}
        </ul>
    </form>
  )
}

export default HeaderSearch