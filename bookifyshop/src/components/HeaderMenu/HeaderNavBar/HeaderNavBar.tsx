import React from 'react'
import { useNavigate, Link } from "react-router-dom";


import 'src/scss/App.scss'
import { ROUTE_ACCOUNT, ROUTE_CART, ROUTE_FAVORITES, ROUTE_HOME } from 'src/utils/routes';

const HeaderNavBar = () => {
  const navigate = useNavigate();

  return (
    <nav> 
        <ul>
            <li>
                <Link to={ROUTE_FAVORITES}>изб</Link>
            </li>
            <li>
                <Link to={ROUTE_CART}>корз</Link>
            </li>
            <li>
                <Link to={ROUTE_ACCOUNT}>акк</Link>
            </li>
            {/* <li>
                <Link to={ROUTE_HOME}>home</Link>
            </li> */}
        </ul>
    </nav>
  )
}

export default HeaderNavBar