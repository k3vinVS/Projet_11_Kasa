import React from "react";
import BodyPicture from "../components/body/BodyPicture";
import Gallery from "../components/body/Gallery";
import "../styles/homePage/home_container.css";
import Header from "../components/header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home_container">
        <BodyPicture />
        <Gallery />
      </div>
    </>
  );
};

export default Home;
