import React from "react";
import logo from "../../assets/logo.png";
import { FaMoon, FaSun } from "react-icons/fa";

const Nav = () => {
  return (
    <div>
      <header className="--flex-between">
        <div className="logo">
          <img src={logo} alt="Nav logo" />
        </div>
        <ul className="--flex-between">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
        </ul>
        <span className="toggle-btn">
          <FaMoon size={16} color="pink" />
          <FaSun size={16} color="yellow" />
          <div></div>
        </span>
      </header>
    </div>
  );
};

export default Nav;
