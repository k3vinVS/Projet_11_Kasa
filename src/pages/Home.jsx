import React from "react";
import BodyPicture from "../components/body/BodyPicture";
import Card from "../components/body/Card";
import "../styles/homePage/home_container.css";
import Header from "../components/header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home_container">
        <BodyPicture />
        <Card />
      </div>
    </>
  );
};

export default Home;
