import React from 'react'
import { useNavigate, Link } from "react-router-dom";

import { ReactComponent as HeartIcon } from 'src/assets/icons/HeartIcon.svg';
import { ReactComponent as CartIcon } from 'src/assets/icons/CartIcon2.svg';
import { ReactComponent as UserIcon } from 'src/assets/icons/UserIcon.svg';

import { ROUTE_ACCOUNT, ROUTE_CART, ROUTE_FAVORITES, ROUTE_HOME } from 'src/utils/routes';

import 'src/scss/App.scss'

const HeaderNavBar = () => {
  const navigate = useNavigate();

  return (
    <nav> 
        <ul>
            <li>
                <Link to={ROUTE_FAVORITES}><HeartIcon/></Link>
            </li>
            <li>
                <Link to={ROUTE_CART}><CartIcon/></Link>
            </li>
            <li>
                <Link to={ROUTE_ACCOUNT}><UserIcon/></Link>
            </li>
            {/* <li>
                <Link to={ROUTE_HOME}>home</Link>
            </li> */}
        </ul>
    </nav>
  )
}

export default HeaderNavBar