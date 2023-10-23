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
      {/* предложение о разделах */}
      {/* сменить иконку */}
      {/* просмотренные посты? */}
      {/* цифра кол-ва в корзине и избранном */}
      <PageTemplate title="Home page" customClass="homePage" invisible>
        <ul className='homePage__list'>
          <li>Programming</li>
          <li>Web dev</li>
          <li>Mobile dev</li>
          <li>Databases</li>
          <li>Algorithms and data structures</li>
          <li>Information Security</li>
          <li>Software architecture and design</li>
          <li>Game dev</li>
          <li>for Beginners</li>
          <li>Software testing and quality</li>
        </ul>
        <div className='grid'>

        {post.map((postItem, index) => (
          <PostItem key={index} {...postItem} />
        ))}
        </div>
      </PageTemplate>
    </>
  );
};

export default HomePage;
