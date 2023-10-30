import React, { useEffect, useState } from "react";
import "../../styles/homePage/body/gallery.css";
import { Link } from "react-router-dom";
import url from "../../datas/logements.json";

// console.log(url.forEach((el) => console.log(el.title))); // Titre de chaque logement
// console.log(url);

const Gallery = () => {
  // const [data, setData] = useState(url);

  useEffect(() => {
    fetch("/datas/logements.json")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="gallery">
      {url.map((logement) => {
        return (
          // Utiliser le Link comme composant pour la suite -----
          <Link to={`./logement/`} key={logement.id}>
            <div className="location">
              <img
                className="cover"
                src={logement.cover}
                alt="vignette logement"
              />
              <p className="title">{logement.title}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Gallery;
