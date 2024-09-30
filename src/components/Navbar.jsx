import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/LogoCircle.png";
import "./navbar.css";
import { useLocation } from "react-router-dom";
import Resume from "../assets/Mohammed Adil_BI Developer.pdf";
import { MdDarkMode} from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useTheme } from "./ThemeContext";
const Navbar = () => {
  const {theme,toggleTheme} = useTheme();
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  return (
    <nav className="a-navbar">
      <div className="a-logoContainer">
        <img src={logo} alt="Logo" className="a-logo" />
      </div>
      <ul className="a-navList">
        <li
          className={splitLocation[1] === "" ? "active a-navItem" : "a-navItem"}
        >
          <Link to="/myPortfolio" className="a-navLink">
            home.
          </Link>
        </li>
        <li
          className={
            splitLocation[1] === "about" ? "active a-navItem" : "a-navItem"
          }
        >
          <Link to="/about" className="a-navLink">
            about.
          </Link>
        </li>
        <li
          className={
            splitLocation[1] === "contact" ? "active a-navItem" : "a-navItem"
          }
        >
          <a href={Resume} download="Resume" className="a-navLink">
            resume.
          </a>
        </li>
      </ul>
      <button className="theme-btn" onClick={toggleTheme}>
        {theme==="dark"?<MdDarkMode />:<CiLight />}
      </button>
    </nav>
  );
};

export default Navbar;
