import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PageTemplate from 'src/components/PageTemplate';
import Post from 'src/components/Post';
import { initialState } from 'src/store/store';

const HomePage = () => {
  return (
    <>
      <PageTemplate title="Home page">
        <div>home page content</div>
        <Post />
      </PageTemplate>
    </>
  );
};

export default HomePage;
