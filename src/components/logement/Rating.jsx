import React from "react";
import starActive from "../../assets/star-active.svg";
import starInactive from "../../assets/star-inactive.svg";
import "../../styles/logement/rating.css"

const Rating = ({data}) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {stars.map((index, star) => (
        <img
          alt="étoile"
          src={data.rating > star ? starActive : starInactive}
          key={index}
        />
      ))}
    </div>
  );
};

export default Rating;
