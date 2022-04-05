import React from 'react'
import { useSelector } from 'react-redux';
import { Link} from 'react-router-dom';
import AccountBtn from '../ui/AccountBtn/AccountBtn'
import Logo from '../ui/Logo/Logo'
import Path from '../ui/Path/Path';
import './Header.css'

const Header = () => {
  const currentUser = useSelector(state=>state.user.currentUser)
  return (
    <header className="header">
        <Logo /> <Path />
        <Link to="/settings" className='acc__btn-link' >
        <AccountBtn avatar={currentUser.avatar} firstName={currentUser.firstName} secondName={currentUser.secondName} type={currentUser.userType} />
        </Link>
    </header>
  )
}

export default Header;


// email: "asf@gmail.com"
// firstName: "asdfd"
// password: "mypassword11"
// secondName: "dfa"