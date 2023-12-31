import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "../styles/errorPage/error.css";

const Error = () => {
  return (
    <>
      <Header />
      <div className="error-container">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="accueil">
          Retourner sur la page d'accueil
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Error;
