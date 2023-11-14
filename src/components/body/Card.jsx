import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/homePage/body/card.css";

const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("logements.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch(console.error);
  }, []);

  return (
    <div className="card">
      {/* ---------------- LOGEMENT ---------------- */}
      {data.map((logement) => (
        <Link to={`./logement/${logement.id}`} key={logement.id}>
          <div className="location">
            <img
              className="cover"
              src={logement.cover}
              alt="vignette logement"
            />
            <p className="title">{logement.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
