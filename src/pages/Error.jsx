import React from "react";
import "../styles/errorPage/error.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="container">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="accueil">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
};

export default Error;
