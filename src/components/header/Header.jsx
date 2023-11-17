import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "../../styles/header/header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo du site" />

      <nav>
        <NavLink to="/" className="lien">
          Accueil
        </NavLink>
        <NavLink to="/a_propos" className="lien">
          A Propos
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
