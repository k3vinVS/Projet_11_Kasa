import React from "react";
import "../../styles/homePage/body/gallery.css";
import { Link } from "react-router-dom";
import url from "../../datas/logements.json";

// console.log(url.forEach((el) => console.log(el.title))); // Titre de chaque logement

const Gallery = () => {
  // const [data, setData] = useState([]);
  // console.log(url);

  return (
    <div className="gallery">
      {url.map((logement) => {
        return (
          // Utiliser le Link comme composant pour la suite -----
          <Link to="/logement" key={logement.id}>
            <div className="location">
              <p className="title">{logement.title}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Gallery;
