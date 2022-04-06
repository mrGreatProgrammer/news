import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../store/reducers/user-actions";
import ErrMsg from "../ui/ErrMsg/ErrMsg";
import Input from "../ui/Input/Input";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visiblePass, setVisiblePass] = useState(false);
  const [passType, setPassType] = useState('password')
  const err = useSelector(state=>state.user.error)
  const dispatch = useDispatch();

  function onLogIn(e) {
    e.preventDefault()
    dispatch(logIn({email, password}));
  }
  function showPass() {
    setVisiblePass(true)
    setPassType('text');
  }
  function hidePass() {
    setVisiblePass(false)
    setPassType('password');
  }

  return (
    <div className="absolute__centered">
      <div className="login">
        {err && <ErrMsg txt={err} /> }
        <h3 className="enter_msg">Log In</h3>
        <form onSubmit={onLogIn}>
        <Input placeholder="email" value={email}
          onChange={setEmail}
          inpType="email" />
        <Input placeholder="password" value={password}
          onChange={setPassword}
          inpType={passType} />
          {visiblePass?( <i onClick={hidePass} className="fas fa-eye login_password-btn"></i> ):(<i onClick={showPass} className="fas fa-eye-slash login_password-btn"></i>)}
        <div className="btn-block">
          <a href="/">Sign Up</a>
          <button type='submit' className="enter-btn" >Log in</button>
        </div>
          </form>
      </div>
    </div>
  );
};

export default Login;
