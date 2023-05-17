import React from "react";
import logo from "../../assets/logo.png";

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
        <span className="toggle-btn"></span>
      </header>
    </div>
  );
};

export default Nav;
