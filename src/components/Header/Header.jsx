import React from 'react'
import AccountBtn from '../ui/AccountBtn/AccountBtn'
import Logo from '../ui/Logo/Logo'
import Path from '../ui/Path/Path';
import './Header.css'

const Header = () => {
  return (
    <header className="header">
        <Logo /> <Path path='discover' /> <AccountBtn />
    </header>
  )
}

export default Header