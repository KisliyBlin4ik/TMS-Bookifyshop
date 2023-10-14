import React, { FC, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { IPageTemplate } from 'src/interface/interface';

import HeaderMenu from '../HeaderMenu';
import Footer from '../Footer';
import Loader from '../Loader';
import Button from '../Common/Button';

import { ReactComponent as BackIcon } from 'src/assets/icons/Left.svg';

import 'src/scss/App.scss';

const PageTemplate: FC<IPageTemplate> = ({
  title,
  customClass,
  children,
  invisible,
}) => {
  const navigate = useNavigate();

  const isLoading = useSelector(({ isLoading }) => isLoading);

  const titlePage = `${title}`;
  const upperCaseTitlePage = titlePage.toUpperCase();

  function goBack() {
    navigate(-1); // Вернуться на предыдущую страницу
  }

  return (
    <>
      <HeaderMenu></HeaderMenu>
      <main>
        {title ? (
          <div className="main__header">
            {invisible ? (
              ''
            ) : (
              <Button type="button" customClass="goBackBtn" onClick={goBack}>
                <BackIcon />
              </Button>
            )}
            <h1>{upperCaseTitlePage}</h1>
          </div>
        ) : (
          ''
        )}
        {isLoading ? <Loader /> : <div className={customClass}>{children}</div>}
      </main>
      <Footer></Footer>
    </>
  );
};

export default PageTemplate;
