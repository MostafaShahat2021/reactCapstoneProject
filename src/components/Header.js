import React from 'react';
import { FaMicrophone, FaAngleLeft, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header-container">
      <div className="angle-Left">
        <Link to="/"><FaAngleLeft className="left" /></Link>
      </div>
      <div className="cont">
        <FaMicrophone className="mic" />
        <FaCog className="ger" />
      </div>
    </div>
  );
}

export default Header;
