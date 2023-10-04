import React from 'react'
import { useNavigate } from "react-router-dom";


import 'src/scss/App.scss'

const HeaderNavBar = () => {
  const navigate = useNavigate();

  return (
    <nav> 
        <ul>
            <li onClick={() => {navigate('/favorites')}}>
                изб
            </li>
            <li onClick={() => {navigate('/cart')}}>
                корз
            </li>
            <li onClick={() => {navigate('/account')}}>
                акк
            </li>
        </ul>
    </nav>
  )
}

export default HeaderNavBar