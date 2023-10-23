import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import { ReactComponent as HeartIcon } from 'src/assets/icons/HeartIcon.svg';
import { ReactComponent as CartIcon } from 'src/assets/icons/CartIcon2.svg';
import { ReactComponent as UserIcon } from 'src/assets/icons/UserIcon.svg';

import { ROUTE_ACCOUNT, ROUTE_CART, ROUTE_FAVORITES } from 'src/utils/routes';

import Burger from 'src/components/BurgerMenu/Burger';

const HeaderNavBar = () => {

  const searchTotal = useSelector(({ cart }) => cart);
  const favoriteTotal = useSelector(({ favorites }) => favorites);
  
  let sumCounterCart = 0;
  searchTotal.map((item: any) => (sumCounterCart += item.counter));

  const sumFavorite = favoriteTotal.length;

  return (
    <nav> 
        <ul>
            <li>
                <Link to={ROUTE_FAVORITES}>
                    <HeartIcon/>
                    {sumFavorite === 0 ? '' : <span>{sumFavorite}</span>}
                </Link>
            </li>
            <li>
                <Link to={ROUTE_CART}>
                    <CartIcon/>
                    {sumCounterCart === 0 ? '' : <span>{sumCounterCart}</span>}
                </Link>
            </li>
            <li>
                <Link to={ROUTE_ACCOUNT}><UserIcon/></Link>
            </li>
            <li>
                <Burger/>
            </li>
        </ul>
    </nav>
  )
}

export default HeaderNavBar