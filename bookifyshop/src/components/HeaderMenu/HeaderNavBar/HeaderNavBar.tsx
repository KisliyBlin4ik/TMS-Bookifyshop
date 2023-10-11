import React from 'react'
import { useNavigate, Link } from "react-router-dom";
import { ReactComponent as UserIcon } from 'src/assets/icons/UserIcon.svg';
import { ReactComponent as HearthIcon } from 'src/assets/icons/HeartIcon.svg';
import { ReactComponent as CardIcon } from 'src/assets/icons/CardIcon.svg';



import 'src/scss/App.scss'
import { ROUTE_ACCOUNT, ROUTE_CART, ROUTE_FAVORITES, ROUTE_HOME } from 'src/utils/routes';

const HeaderNavBar = () => {
  const navigate = useNavigate();

  return (
    <nav> 
        <ul>
            <li>
                <Link to={ROUTE_FAVORITES}><HearthIcon/></Link>
            </li>
            <li>
                <Link to={ROUTE_CART}><CardIcon/></Link>
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