import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import PageTemplate from 'src/components/PageTemplate';

const BookPage = () => {
  const { bookId } = useParams();
  const location = useLocation();
  const l = location.state;
  console.log(location.state);

  return (
    <>
      <PageTemplate title="Book page">пост{bookId}</PageTemplate>
    </>
  );
};

export default BookPage;
