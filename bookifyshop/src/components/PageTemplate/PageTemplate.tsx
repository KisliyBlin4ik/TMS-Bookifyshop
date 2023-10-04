import React, { FC, ReactNode } from 'react';

import HeaderMenu from '../HeaderMenu';
import Footer from '../Footer';

import { IPageTemplate } from 'src/interface/interface';

import './PageTemplate.scss';

const PageTemplate: FC<IPageTemplate> = ({ title, children }) => {
  const titlePage = `${title}`;
  const upperCaseTitlePage = titlePage.toUpperCase();
  
  return (
    <>
      <HeaderMenu></HeaderMenu>
      <main>
        <h1>{upperCaseTitlePage}</h1>
        <div>{children}</div>
      </main>
      <Footer></Footer>
    </>
  );
};

export default PageTemplate;
