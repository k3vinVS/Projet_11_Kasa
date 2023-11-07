import React, { useEffect, useState } from "react";
import "../../styles/homePage/body/gallery.css";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("logements.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch(console.error);
  }, []);

  return (
    <div className="gallery">
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

export default Gallery;
