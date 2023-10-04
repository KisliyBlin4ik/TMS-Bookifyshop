import React from 'react';
import { useNavigate } from 'react-router-dom';

import './HeaderLogo.scss';

const HeaderLogo = () => {
  const navigate = useNavigate();

  const logo = 'Bookifyshop';
  const upperCaseLogo = logo.toUpperCase();

  return (
    <div className="logo" onClick={() => navigate('/home')}>
      {upperCaseLogo}
    </div>
    // svg формат?
  );
};

export default HeaderLogo;
