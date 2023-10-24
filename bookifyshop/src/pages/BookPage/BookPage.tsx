import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { IBookItem } from 'src/utils/interface';

import PageTemplate from 'src/components/ModulesForPages/PageTemplate';
import PostSingle from 'src/components/Modules/PostSingle';

const BookPage = () => {
  const { bookId } = useParams();
  const location = useLocation();

  const postProps: IBookItem = location.state;

  return (
    <>
      <PageTemplate title={postProps.title} customClass="bookPage">
        <PostSingle key={bookId} {...postProps} />
      </PageTemplate>
    </>
  );
};

export default BookPage;
