import React from "react";
import "../../styles/utils/bodyPicture.css";

const BodyPicture = () => {
  const bannerValue =
    window.location.href === "http://localhost:3000/"
      ? "banniere-home"
      : "banniere-about";
  return (
    <div className={bannerValue}>
      <p>Chez vous, partout et ailleurs</p>
    </div>
  );
};

export default BodyPicture;
