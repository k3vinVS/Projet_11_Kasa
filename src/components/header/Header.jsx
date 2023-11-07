import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "../../styles/header/header.css";

const Header = () => {
  const homeLinkValue = window.location.href === "http://localhost:3000/";
  const aboutLinkValue =
    window.location.href === "http://localhost:3000/a_propos";
  const otherLinkValue = homeLinkValue || aboutLinkValue;

  return (
    <div className="header">
      <img src={logo} alt="logo du site" />

      {homeLinkValue && (
        <nav>
          <Link to="/" className="lien" style={{ textDecoration: "underline" }}>
            Accueil
          </Link>
          <Link
            to="/a_propos"
            className="lien"
            style={{ textDecoration: "none" }}
          >
            A Propos
          </Link>
        </nav>
      )}
      {aboutLinkValue && (
        <nav>
          <Link to="/" className="lien" style={{ textDecoration: "none" }}>
            Accueil
          </Link>
          <Link
            to="/a_propos"
            className="lien"
            style={{ textDecoration: "underline" }}
          >
            A Propos
          </Link>
        </nav>
      )}

      {!otherLinkValue && (
        <nav>
          <Link to="/" className="lien">
            Accueil
          </Link>
          <Link to="/a_propos" className="lien">
            A Propos
          </Link>
        </nav>
      )}
    </div>
  );
};

export default Header;
