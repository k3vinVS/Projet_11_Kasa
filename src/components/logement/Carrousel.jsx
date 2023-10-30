import React from "react";
import picture from "../../assets/body_picture_aPropos.png";
import "../../styles/logement/carrousel.css";

const Carrousel = () => {
  return (
    <div className="carrousel_container">
      <img className="carrousel" src={picture} alt="carrousel" />
    </div>
  );
};

export default Carrousel;
