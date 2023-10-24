import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { IPageTemplate } from 'src/utils/interface';

import HeaderMenu from '../HeaderMenu';
import Footer from '../../Elements/Footer';
import Loader from '../../Elements/Loader';
import Button from '../../Elements/Button';

import { ReactComponent as BackIcon } from 'src/assets/icons/Left.svg';

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
    navigate(-1);
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
