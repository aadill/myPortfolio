import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/LogoCircle.png";
import "./navbar.css";
import { useLocation } from "react-router-dom";
import Resume from "../assets/Mohammed Adil_BI Developer.pdf";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useTheme } from "./ThemeContext";
import { FaBars, FaTimes } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  // State to manage whether the menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="a-navbar">
      <div className="a-logoContainer">
        <img src={logo} alt="Logo" className="a-logo" />
      </div>

      {/* Hamburger icon for small screens */}
      <button className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? <IoCloseOutline /> : <CiMenuBurger />}
      </button>

      <ul className={`a-navList ${isMenuOpen ? "active" : ""}`}>
        <li className={splitLocation[1] === "" ? "active a-navItem" : "a-navItem"}>
          <Link to="/myPortfolio" className="a-navLink">home.</Link>
        </li>
        <li className={splitLocation[1] === "about" ? "active a-navItem" : "a-navItem"}>
          <Link to="/about" className="a-navLink">about.</Link>
        </li>
        <li className={splitLocation[1] === "contact" ? "active a-navItem" : "a-navItem"}>
          <a href={Resume} download="Resume" className="a-navLink">resume.</a>
        </li>
      </ul>

      <button className="theme-btn" onClick={toggleTheme}>
        {theme === "dark" ? <MdDarkMode /> : <CiLight />}
      </button>
    </nav>
  );
};

export default Navbar;
