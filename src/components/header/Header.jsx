import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "../../styles/header/header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo du site" />

      <nav>
        <Link to="/" className="lien">
          Accueil
        </Link>
        <Link to="/a_propos" className="lien">
          A Propos
        </Link>
      </nav>
    </div>
  );
};

export default Header;
