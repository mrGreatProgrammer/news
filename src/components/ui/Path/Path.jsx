import React from "react";
import { useLocation } from "react-router-dom";
import "./Path.css";

const Path = () => {
  const path = useLocation()
  const pathName = path.pathname.split('/').join('')


  return (
    <div className="path">
      <h2>{pathName}</h2>
    </div>
  );
};

export default Path;
