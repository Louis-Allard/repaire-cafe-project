import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import repaircafelogo from "../media/repaircafe_logo1.png";
import "../scss/navigation.scss";
import { Link } from "react-router-dom";
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="containerNav">
      <Link to="/" className="logo">
        <img
          className="imglogo"
          src={repaircafelogo}
          alt="logoRepairCafe"
        ></img>
      </Link>
      <div
        className={`menu-button ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <nav className="lienNav">
        <div class="element-avec-curseur-personnalise2">
          <ul className="navigation-list">
            <li className="navigation-item">
              <NavLink to={"/"}>Accueil</NavLink>
            </li>
            <li className="navigation-item">
              <NavLink to="/apropos">A propos </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
