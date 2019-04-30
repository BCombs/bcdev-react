import React from 'react';
import './css/avatar.css';

const Avatar = props => {
  return (
    <div className="image-container">
      <img className="image" src={require('../img/bill.jpg')} alt="Bill" />
    </div>
  );
};

export default Avatar;
