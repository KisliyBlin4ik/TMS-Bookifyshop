import React from 'react';
import { useSelector } from 'react-redux';

import { IPosts } from 'src/interface/interface';

import PageTemplate from 'src/components/PageTemplate';
import Post from 'src/components/Post';

import 'src/scss/App.scss';

const HomePage = () => {
  const posts: IPosts[] = useSelector(({ posts }) => posts);

  return (
    <>
      <PageTemplate title="Home page" customClass="homePage">
        {posts.map(({ image, isbn13, price, subtitle, title, url }, index) => (
          <Post
            key={index}
            image={image}
            isbn13={isbn13}
            price={price}
            subtitle={subtitle}
            title={title}
            url={url}
          />
        ))}
      </PageTemplate>
    </>
  );
};

export default HomePage;
