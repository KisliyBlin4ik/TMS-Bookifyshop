import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import { IPostItem, IPosts } from 'src/interface/interface';

import { FETCH_POST } from 'src/actions/actions';

import PageTemplate from 'src/components/PageTemplate';
import PostItem from 'src/components/Post/PostItem';

const HomePage = () => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();

  const posts: IPosts[] = useSelector(({ posts }) => posts);
  const isbnArr = posts.map(({ isbn13 }) => isbn13);

  useEffect(() => {
    dispatch(FETCH_POST(isbnArr));
  }, [posts]);

  const post: IPostItem[] = useSelector(({ post }) => post);

  return (
    <>
      <PageTemplate title="Home page" customClass="homePage" invisible>
        {post.map((postItem, index) => (
          <PostItem key={index} {...postItem} />
        ))}
        {/* сделать пагинацию */}
      </PageTemplate>
    </>
  );
};

export default HomePage;
