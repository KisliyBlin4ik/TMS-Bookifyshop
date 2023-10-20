import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { FETCH_SEARCH_POST } from 'src/actions/actions';

import { IPostItem } from 'src/interface/interface';

import PageTemplate from 'src/components/PageTemplate';
import PostItem from 'src/components/Post/PostItem';

const SearchPage = () => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const location = useLocation();
  const { book } = useParams();

  const posts: IPostItem[] = location.state;
  const isbn = posts.map((item: any) => item.isbn13);
  const searchPost: IPostItem[] = useSelector(({ search }) => search);

  useEffect(() => {
    dispatch(FETCH_SEARCH_POST(isbn));
  }, [posts]);

  return (
    <>
      <PageTemplate
        title={`Search results '${book}'`}
        customClass="searchPage"
        invisible
      >
        {searchPost.map((postItem, index) => (
          <PostItem key={index} {...postItem} />
        ))}
        {/* сделать пагинацию */}
      </PageTemplate>
    </>
  );
};

export default SearchPage;
