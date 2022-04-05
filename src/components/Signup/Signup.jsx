import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../store/reducers/user-actions";
import ErrMsg from "../ui/ErrMsg/ErrMsg";
import Input from "../ui/Input/Input";
import "./Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const dispatch = useDispatch();
  const err = useSelector(state=>state.user.error)
  
  function onSignUp() {
    dispatch(signUp({ firstName, secondName, email, password }));
  }

  return (
    <div className="absolute__centered">
      <div className="sugnup">
        <h3 className="enter_msg">Sign Up</h3>
        {err && <ErrMsg txt={err} />}
        <Input
          placeholder="First name"
          value={firstName}
          onChange={setFirstName}
          inpType="text"
        />
        <Input
          placeholder="Second name"
          value={secondName}
          onChange={setSecondName}
          inpType="text"
        />
        <Input
          placeholder="Email"
          value={email}
          onChange={setEmail}
          inpType="email"
        />
        <Input
          placeholder="Password"
          value={password}
          onChange={setPassword}
          inpType="password"
        />
        <i className="fas fa-eye-slash login_password-btn"></i>
        <div className="btn-block">
          <a href="/login">Log In</a>
          <button className="enter-btn" onClick={onSignUp}>
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
