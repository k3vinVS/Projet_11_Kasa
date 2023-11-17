import React from "react";
import "../../styles/utils/bodyPicture.css";
import { useLocation } from "react-router-dom";

const BodyPicture = () => {
  const location = useLocation();

  return (
    <div
      className={location.pathname === "/" ? "banniere-home" : "banniere-about"}
    >
      <p>Chez vous, partout et ailleurs</p>
    </div>
  );
};

export default BodyPicture;
