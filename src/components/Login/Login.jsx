import React from 'react';
import Input from '../ui/Input/Input';
import './Login.css';

const Login = () => {
  return (
<div className="login">
    <Input placeholder="Name" />
    <Input placeholder="Last name" />
    <Input placeholder="email" />
    <Input placeholder="password" /> <i class="fas fa-eye-slash password-btn"></i>
   <div className="btn-block"> <button className="enter-btn">Log in</button> </div>
</div>
  )
}

export default Login