import React from 'react'
import { useSelector } from 'react-redux';
import AccountBtn from '../ui/AccountBtn/AccountBtn'
import Logo from '../ui/Logo/Logo'
import Path from '../ui/Path/Path';
import './Header.css'

const Header = () => {
  const currentUser = useSelector(state=>state.user.currentUser)
  console.log(currentUser);
  return (
    <header className="header">
        <Logo /> <Path path='discover' /> <AccountBtn avatar={currentUser.avatar} firstName={currentUser.firstName} secondName={currentUser.secondName} type={null} />
    </header>
  )
}

export default Header;


// email: "asf@gmail.com"
// firstName: "asdfd"
// password: "mypassword11"
// secondName: "dfa"