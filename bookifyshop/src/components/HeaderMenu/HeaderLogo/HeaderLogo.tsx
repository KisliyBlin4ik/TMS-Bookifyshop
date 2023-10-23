import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTE_HOME } from 'src/utils/routes';

const HeaderLogo = () => {
  return (
    <div className="logo">
      <Link to={ROUTE_HOME}>BOOKIFYSHOP</Link>
    </div>
  );
};

export default HeaderLogo;
