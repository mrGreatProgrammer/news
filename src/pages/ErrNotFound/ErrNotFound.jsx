import React from 'react';
import { NavLink } from 'react-router-dom';
import './ErrNotFound.css';

const ErrNotFound = () => {
  return (

        <div className="enf">
          <h1 className="ernf-message">404</h1>
          <h3 className="ernf-text">This page doesnt exist</h3>
          <NavLink to="/" className="go-home-page">
            home
          </NavLink>
        </div>
  )
}

export default ErrNotFound