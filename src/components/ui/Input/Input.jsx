import React from "react";
import './Input.css';

const Input = ({placeholder, value, onChange, inpType}) => {
  return (
    <div className="input-block">
      <input className="input" placeholder={placeholder} value={value} onChange={ (e) => onChange(e.target.value)} type={inpType} />
    </div>
  );
};

export default Input;
