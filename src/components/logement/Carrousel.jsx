import React, { useEffect, useState } from "react";
import arrow from "../../assets/arrow_back.svg";
import "../../styles/logement/carrousel.css";
// import picture from "../../assets/body_picture_aPropos.png";

const Carrousel = (props) => {
  // const [isSlide, setIsSlide] = useState("");
  const { children } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);
  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };
  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  useEffect(() => {
    setLength(children.length);
  }, [children]);

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {currentIndex > 0 && (
          <img
            className="arrow_left"
            src={arrow}
            alt="flèche de navigation"
            onClick={prev}
          />
        )}

        <div className="carousel-content-wrapper">
          <span className="picture_counter">
            {currentIndex + 1}/{children.length}
          </span>
          <div
            className="carousel-content"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {children}
          </div>
        </div>
        {currentIndex < length - 1 && (
          <img
            className="arrow_right"
            src={arrow}
            alt="flèche de navigation"
            onClick={next}
          />
        )}
      </div>
    </div>
  );
  // return (
  //   <div className="carrousel_container">
  //     {/* <img className="carrousel" src={picture} alt="carrousel" /> */}
  //     <img
  //       className="arrow_left"
  //       src={arrow}
  //       alt="flèche de navigation"
  //       onClick={() => setIsSlide()}
  //     />
  //     <img
  //       className="arrow_right"
  //       src={arrow}
  //       alt="flèche de navigation"
  //       onClick={() => setIsSlide("a droite")}
  //     />
  //   </div>
  // );
};

export default Carrousel;
