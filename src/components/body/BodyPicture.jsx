import React from "react";
import "../../styles/homePage/body/bodyPicture.css";
// import "../../styles/aPropos/body/bodyPicture.css";

const BodyPicture = () => {
  const bannerValue =
    window.location.href === "http://localhost:3000/"
      ? "banniere_home"
      : "banniere_aPropos";
  return (
    <div className={bannerValue}>
      <p>Chez vous, partout et ailleurs</p>
    </div>
  );
};

export default BodyPicture;
