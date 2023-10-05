import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Button from 'src/components/Button';
import PageTemplate from 'src/components/PageTemplate';
import PostSingle from 'src/components/PostSingle';

const BookPage = () => {
  const { bookId } = useParams();

  return (
    <>
      <PageTemplate customClass="bookPage">
        <PostSingle></PostSingle>
      </PageTemplate>
    </>
  );
};

export default BookPage;
