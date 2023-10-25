import React from "react";
import BodyPicture from "../components/body/BodyPicture";
import Gallery from "../components/body/Gallery";
import "../styles/homePage/container.css";

const Home = () => {
  return (
    <div className="container">
      <BodyPicture />
      <Gallery />
    </div>
  );
};

export default Home;
