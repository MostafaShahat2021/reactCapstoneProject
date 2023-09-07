import React from 'react';
import { FaMicrophone, FaChevronCircleRight, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header-container">
      <div className="angle-Left">
        <Link to="/"><FaChevronCircleRight className="left" /></Link>
      </div>
      <div className="cont">
        <FaMicrophone className="mic" />
        <FaCog className="ger" />
      </div>
    </div>
  );
}

export default Header;
