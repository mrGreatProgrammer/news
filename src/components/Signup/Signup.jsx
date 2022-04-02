import axios from "axios";
import React, { useState } from "react";
import Input from "../ui/Input/Input";
import "./Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");

  function onSignUp() {
    let res = "";
    const a = async () => {
      res = await axios.post(
        "https://6246c1b4e3450d61b00249a5.mockapi.io/users",
        {
          firstName: firstName,
          secondName: secondName,
          email: email,
          password: password,
        }
      );
      console.log(res);
    };
    a();
    console.log("email:", email, "password:", password);
    console.log(res);
  }

  return (
    <div className="sugnup">
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
      <div className="btn-block">
        <button className="enter-btn" onClick={onSignUp}>
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Signup;
