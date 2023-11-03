import React from "react";
import "../../styles/homePage/body/gallery.css";
import { Link } from "react-router-dom";
import url from "../../datas/logements.json";

// console.log(url.forEach((el) => console.log(el.title))); // Titre de chaque logement
// console.log(url);

const Gallery = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("../../datas/logements.json")
  //     .then((response) => console.log(response))
  //     .then((data) => setData(data))
  //     .catch((error) => console.log(error));
  // }, []);

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
