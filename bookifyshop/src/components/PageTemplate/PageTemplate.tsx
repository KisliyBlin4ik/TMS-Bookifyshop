import React, { FC, ReactNode } from 'react';
import { useSelector } from 'react-redux';

import { IPageTemplate } from 'src/interface/interface';

import HeaderMenu from '../HeaderMenu';
import Footer from '../Footer';
import Loader from '../Loader';

import 'src/scss/App.scss';

const PageTemplate: FC<IPageTemplate> = ({ title, customClass, children }) => {
  const isLoading = useSelector(({ isLoading }) => isLoading);

  const titlePage = `${title}`;
  const upperCaseTitlePage = titlePage.toUpperCase();

  return (
    <>
      <HeaderMenu></HeaderMenu>
      <main>
        {title ? <h1>{upperCaseTitlePage}</h1> : ''}
        {isLoading ? <Loader /> : <div className={customClass}>{children}</div>}
      </main>
      <Footer></Footer>
    </>
  );
};

export default PageTemplate;
