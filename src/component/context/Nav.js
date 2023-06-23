import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import { FaMoon, FaSun } from "react-icons/fa";
import "./Nav.css";
import ThemeContext from "../../contextApi/themeContext";

const Nav = () => {
  // const action = () => {
  //   console.log("I am a woman")

  // }

  const { theme, toggleTheme, switchBtn } = useContext(ThemeContext);
  return (
    <header data-theme={theme}>
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
        <div onClick={toggleTheme}>
          <span className="toggle-btn">
            <FaMoon size={16} color="pink" />
            <FaSun size={16} color="yellow" />
            <div className={switchBtn ? "ball move" : "ball"}></div>
          </span>
        </div>
      </div>
    </header>
  );
};
export default Nav;
