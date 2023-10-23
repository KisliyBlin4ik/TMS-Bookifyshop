import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import { IBookItem, IBooks } from 'src/utils/interface';

import { FETCH_BOOK } from 'src/actions/fetchBook';

import PageTemplate from 'src/components/PageTemplate';
import PostItem from 'src/components/Post/PostItem';

const HomePage = () => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();

  const books: IBooks[] = useSelector(({books}) => books);
  
  const isbnArr = books.map(({ isbn13 }) => isbn13);

  useEffect(() => {
    dispatch(FETCH_BOOK(isbnArr));
  }, [books]);

  const book: IBookItem[] = useSelector(({ book }) => book);

  return (
    <>
      {/* предложение о разделах */}
      {/* сменить иконку */}
      {/* просмотренные посты? */}
      {/* цифра кол-ва в корзине и избранном */}
      <PageTemplate title="Home page" customClass="homePage" invisible>
        {book.map((postItem, index) => (
          <PostItem key={index} {...postItem} />
        ))}
      </PageTemplate>
    </>
  );
};

export default HomePage;
