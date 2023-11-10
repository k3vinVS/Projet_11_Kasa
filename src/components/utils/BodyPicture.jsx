import React from "react";
import "../../styles/bodyPicture.css";

const BodyPicture = () => {
  const bannerValue =
    window.location.href === "http://localhost:3000/"
      ? "banniere_home"
      : "banniere_about";
  return (
    <div className={bannerValue}>
      <p>Chez vous, partout et ailleurs</p>
    </div>
  );
};

export default BodyPicture;
