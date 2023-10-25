import React from "react";
import BodyPicture from "../components/body/BodyPicture";
import Collapse from "../components/body/Collapse";
import "../styles/aPropos/aPropos_container.css";

const APropos = () => {
  return (
    <div className="aPropos_container">
      <BodyPicture />
      <Collapse />
    </div>
  );
};

export default APropos;
