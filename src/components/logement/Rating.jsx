import React from "react";
import starActive from "../../assets/star-active.svg";
import starInactive from "../../assets/star-inactive.svg";

const Rating = ({data}) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div>
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
