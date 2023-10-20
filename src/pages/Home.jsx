import React from "react";
import Body from "../components/body/BodyPicture";
import "../styles/homePage/home.css";
import Gallery from "../components/body/Gallery";

const Home = () => {
  return (
    <div className="body">
      <Body />
      <Gallery />
    </div>
  );
};

export default Home;
