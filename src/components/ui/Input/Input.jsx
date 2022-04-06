import React from "react";
import './Input.css';

const Input = ({placeholder, value, onChange, inpType, disabled}) => {
  return (
    <div className="input-block">
      <input className="input" placeholder={placeholder} value={value} onChange={ (e) => onChange(e.target.value)} type={inpType} disabled={disabled} />
    </div>
  );
};

export default Input;
