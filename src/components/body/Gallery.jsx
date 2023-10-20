import React from "react";
import "../../styles/homePage/body/gallery.css";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div className="gallery">
      <Link to="/logement">
        <div className="location">
          <p className="title">Titre de la location</p>
        </div>
      </Link>
      <div className="location">
        <p className="title">Titre de la location</p>
      </div>
      <div className="location">
        <p className="title">Titre de la location</p>
      </div>
      <div className="location">
        <p className="title">Titre de la location</p>
      </div>
      <div className="location">
        <p className="title">Titre de la location</p>
      </div>
      <div className="location">
        <p className="title">Titre de la location</p>
      </div>
    </div>
  );
};

export default Gallery;
