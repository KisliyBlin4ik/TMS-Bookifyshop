import React from 'react';
import { useSelector } from 'react-redux';

import { IPost } from 'src/interface/interface';

import PageTemplate from 'src/components/PageTemplate';
import Post from 'src/components/Post';

import './HomePage.scss';

const HomePage = () => {
  const posts: IPost[] = useSelector(({ posts }) => posts);

  return (
    <>
      <PageTemplate title="Home page" customClass="homePage">
        {posts.map(({ id, image, title, date }, index) => (
          <Post key={index} id={id} image={image} title={title} date={date} />
        ))}
      </PageTemplate>
    </>
  );
};

export default HomePage;
