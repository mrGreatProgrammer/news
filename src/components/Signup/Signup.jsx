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
  const [visiblePass, setVisiblePass] = useState(false);
  const [passType, setPassType] = useState("password");
  const dispatch = useDispatch();
  const err = useSelector((state) => state.user.error);

  function onSignUp(e) {
    e.preventDefault();
    dispatch(signUp({ firstName, secondName, email, password }));
  }

  function showPass() {
    setVisiblePass(true);
    setPassType("text");
  }
  function hidePass() {
    setVisiblePass(false);
    setPassType("password");
  }

  return (
    <div className="absolute__centered">
      <div className="sugnup">
        <h3 className="enter_msg">Sign Up</h3>
        {err && <ErrMsg txt={err} />}
        <form onSubmit={onSignUp}>
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
            placeholder="password"
            value={password}
            onChange={setPassword}
            inpType={passType}
          />
          {visiblePass ? (
            <i onClick={hidePass} className="fas fa-eye login_password-btn"></i>
          ) : (
            <i
              onClick={showPass}
              className="fas fa-eye-slash login_password-btn"
            ></i>
          )}
          <div className="btn-block">
            <a href="/login">Log In</a>
            <button type="submit" className="enter-btn">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
