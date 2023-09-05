import React from 'react';
import { FaMicrophone, FaAngleLeft, FaCog } from 'react-icons/fa';

function Header() {
  return (
    <div className="header-container">
      <div className="angle-Left"><FaAngleLeft /></div>
      <div className="cont">
        <FaMicrophone />
        <FaCog />
      </div>
    </div>
  );
}

export default Header;
