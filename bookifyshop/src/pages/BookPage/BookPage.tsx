import React from 'react';
import { useParams, useLocation } from 'react-router-dom';


import PageTemplate from 'src/components/PageTemplate';
import PostSingle from 'src/components/Post/PostSingle';
import { IPostItem } from 'src/interface/interface';

const BookPage = () => {
  const { bookId } = useParams();
  const location = useLocation();

  const {
    authors,
    desc,
    error,
    image,
    isbn10,
    isbn13,
    language,
    pages,
    pdf,
    price,
    publisher,
    rating,
    subtitle,
    title,
    url,
    year,
  }: IPostItem = location.state;

  return (
    <>
      <PageTemplate title={title} customClass="bookPage">
        <PostSingle 
              key={isbn13}
              authors={authors}
              desc={desc}
              error={error}
              image={image}
              isbn10={isbn10}
              isbn13={isbn13}
              language={language}
              pages={pages}
              pdf={pdf}
              price={price}
              publisher={publisher}
              rating={rating}
              subtitle={subtitle}
              title={title}
              url={url}
              year={year}/>
      </PageTemplate>
    </>
  );
};

export default BookPage;
