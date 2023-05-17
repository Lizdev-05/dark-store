import React from "react";
import logo from "../../assets/logo.png";
import { FaMoon, FaSun } from "react-icons/fa";
import "./Nav.css";

const Nav = () => {
  return (
    <header>
      <div className="container --flex-between">
        <div className="logo">
          <img src={logo} alt="Nav logo" size={170} />
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
          <div className="ball"></div>
        </span>
      </div>
    </header>
  );
};
export default Nav;
