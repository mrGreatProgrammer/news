import React from 'react';
import './ErrMsg.css';

const ErrMsg = ({txt}) => {
  return (
    // <div className="container--glassmorfism">
    <div className="err__msg-block">
        <h1 className="err__msg--txt">{txt}</h1>
    </div>
    // </div>
  )
}

export default ErrMsg