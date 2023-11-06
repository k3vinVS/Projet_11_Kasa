import React, { useEffect, useState } from "react";
import "../../styles/homePage/body/gallery.css";
import { Link } from "react-router-dom";
// import logements from "../../datas/logements.json";

// console.log(url.forEach((el) => console.log(el.title))); // Titre de chaque logement
// console.log(url);

const Gallery = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("logements.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch(console.error);
  }, []);

  // fetch("logements.json")
  //   .then((res) => res.json())
  //   .then((data) => setData(data))
  //   .catch(console.error);

  return (
    <div className="gallery">
      {data.map((logement, index) => (
        // Utiliser le Link comme composant pour la suite -----
        <Link
          to={`./logement/${logement.id}`}
          key={logement.id}
        >
          {/* ---------------- LOGEMENT ---------------- */}
          <div className="location" >
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
