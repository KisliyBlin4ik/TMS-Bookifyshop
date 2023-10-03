import React from 'react'

import './HeaderMenu.scss'
import HeaderLogo from './HeaderLogo'
import Input from '../Input'
import HeaderNavBar from './HeaderNavBar'

const HeaderMenu = () => {
  return (
    <header>
      <HeaderLogo></HeaderLogo>
      <Input></Input>
      <HeaderNavBar></HeaderNavBar>
    </header>
  )
}

export default HeaderMenu