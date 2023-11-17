import React from "react";
import BodyPicture from "../components/utils/BodyPicture";
import Card from "../components/body/Card";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "../styles/homePage/home_container.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home-container">
        <BodyPicture />
        <Card />
      </div>
      <Footer />
    </>
  );
};

export default Home;
