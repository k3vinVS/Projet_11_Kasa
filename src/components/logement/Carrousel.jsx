import React, { useEffect, useState } from "react";
import arrow from "../../assets/arrow_back.svg";
import "../../styles/logement/carrousel.css";

const Carrousel = (props) => {
  // const [isSlide, setIsSlide] = useState("");
  const { children } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);
  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    } else {
      setCurrentIndex((prevState) => prevState - length + 1);
    }
  };
  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    } else {
      setCurrentIndex((prevState) => prevState + (length - 1));
    }
  };

  useEffect(() => {
    setLength(children.length);
  }, [children]);

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {length !== 1 ? (
          <img
            className="arrow_left"
            src={arrow}
            alt="flèche de navigation"
            onClick={prev}
          />
        ) : null}

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
        {length !== 1 ? (
          <img
            className="arrow_right"
            src={arrow}
            alt="flèche de navigation"
            onClick={next}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Carrousel;
