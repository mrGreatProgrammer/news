import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../store/reducers/user-actions";
import ErrMsg from "../ui/ErrMsg/ErrMsg";
import Input from "../ui/Input/Input";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const err = useSelector(state=>state.user.error)
  const dispatch = useDispatch();

  function onLogIn() {
    dispatch(logIn({email, password}));
  }

  return (
    <div className="absolute__centered">
      <div className="login">
        {err && <ErrMsg txt={err} /> }
        <h3 className="enter_msg">Log In</h3>
        <Input placeholder="email" value={email}
          onChange={setEmail}
          inpType="email" />
        <Input placeholder="password" value={password}
          onChange={setPassword}
          inpType="password" />
        <i className="fas fa-eye-slash login_password-btn"></i>
        <div className="btn-block">
          <a href="/">Sign Up</a>
          <button className="enter-btn" onClick={onLogIn}>Log in</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
