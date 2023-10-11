import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Button from 'src/components/Button';
import PageTemplate from 'src/components/PageTemplate';
import PostSingle from 'src/components/PostSingle';

const BookPage = () => {
  const { bookId } = useParams();
  // console.log(bookId);
  

  return (
    <>
      <PageTemplate customClass="bookPage">
        <PostSingle />
      </PageTemplate>
    </>
  );
};

export default BookPage;
