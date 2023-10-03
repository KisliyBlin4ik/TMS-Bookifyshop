import React, { FC, ReactNode } from 'react';
import HeaderMenu from '../HeaderMenu';
import Footer from '../Footer';

import './PageTemplate.scss';

interface IPageTemplate {
  title: string;
  children: ReactNode;
}

const PageTemplate: FC<IPageTemplate> = ({ title, children }) => {
  return (
    <>
      <HeaderMenu></HeaderMenu>
      <main>
        <h1>{title}</h1>
        <div>{children}</div>
      </main>
      <Footer></Footer>
    </>
  );
};

export default PageTemplate;
