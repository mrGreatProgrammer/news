import React from "react";
import "./AccountBtn.css";
import avatarImg from "../../../imgs/6160254_0.webp";

const AccountBtn = ({ avatar, firstName, secondName, type }) => {
  return (
    <div className="account__btn">
      {!avatar ? (<img src={avatarImg} alt="" className="account__btn--img" />) : (<img src={avatar} alt="" className="account__btn--img" />) }
      <div className="account__btn--info">
        <div className="account__btn--name">
          <p className="account__btn--first__name"> 
          {firstName}
          </p>
          <p className="account__btn--second__name">{secondName}
          </p>
        </div>
        <div className="account__btn--type">{type}
        </div>
      </div>
    </div>
  );
};

export default AccountBtn;
