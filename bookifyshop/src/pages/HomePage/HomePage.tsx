import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import { IPostItem, IPosts } from 'src/interface/interface';

import { FETCH_POST } from 'src/actions/actions';

import PageTemplate from 'src/components/PageTemplate';
import Post from 'src/components/Post/PostItem';

import 'src/scss/App.scss';
import PostItem from 'src/components/Post/PostItem';

const HomePage = () => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();

  const posts: IPosts[] = useSelector(({ posts }) => posts);
  const isbnArr = posts.map(({ isbn13 }) => isbn13);
  // image, isbn13, price, subtitle, title, url

  useEffect(() => {
    dispatch(FETCH_POST(isbnArr));
  }, []);

  const post: IPostItem[] = useSelector(({ post }) => post);

  return (
    <>
      <PageTemplate title="Home page" customClass="homePage" invisible>
        {post.map(
          (
            {
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
            },
            index
          ) => (
            <PostItem
              key={index}
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
              year={year}
            />
          )
        )}
      </PageTemplate>
    </>
  );
};

export default HomePage;
