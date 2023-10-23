import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { SEARCH_ON_PAGE } from 'src/actions/actions';

import { IPostItem } from 'src/interface/interface';

import PageTemplate from 'src/components/PageTemplate';
import PostItem from 'src/components/Post/PostItem';
import Pagination from 'src/components/Pagination';

const SearchPage = () => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const { book } = useParams();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const searchOnPage: IPostItem[] = useSelector(({ searchOnPage }) => searchOnPage);
  const searchTotal = useSelector(({ search }) => search);
  
  let total = 0;
  if (searchTotal.total) {
    total = searchTotal.total > 100 ? 100 : searchTotal.total
  }

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    if (book) {
      dispatch({ type: 'SET_LOADING', payload: true });

      dispatch(SEARCH_ON_PAGE(book, currentPage));
    dispatch({ type: 'SET_LOADING', payload: false });

    }
  }, [book, currentPage]);

  return (
    <>
      <PageTemplate title={`Search results '${book}'`} customClass="searchPage" invisible>
        <p>Found {searchTotal.total} books</p>
        <div className="searchPage__content">
          {searchOnPage.map((postItem, index) => (
            <PostItem key={index} {...postItem} />
          ))}
        </div>
        <>
          <Pagination totalItems={total} itemsPerPage={itemsPerPage} onPageChange={handlePageChange} />
        </>
      </PageTemplate>
    </>
  );
};

export default SearchPage;
