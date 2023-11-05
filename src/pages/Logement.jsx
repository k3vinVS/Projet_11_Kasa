import React from "react";
import Carrousel from "../components/logement/Carrousel";
import url from "../datas/logements.json";
import starActive from "../assets/star-active.svg";
import starInactive from "../assets/star-inactive.svg";
import Collapse from "../components/utils/Collapse";
import Header from "../components/header/Header";
import "../styles/logement/logement.css";

// function numberOfStar() {
//   for (let i = 0; i < url.length; i++) {
//     const nbStar = url[i].rating;
//     if (nbStar > 3) {
//       // nbStar = { starActive };
//       console.log(nbStar );
//     }
//   }
// }
// numberOfStar();

const Logement = () => {
  // const [data, setData] = useState(url);
  // const [isNbStar, setIsNbStar] = useState(0);

  return (
    <>
      <Header />
      <div className="logement_container">
        <Carrousel>
          {url[0].pictures.map((picture) => (
            // console.log(logement.pictures[0])
            <img
              src={picture}
              alt="logement"
              key={picture}
            />
            // <img src={logement.pictures[1]} alt="logement" />
            // <img src={logement.pictures[2]} alt="logement" />
            // <img src={logement.pictures[3]} alt="logement" />
          ))}
        </Carrousel>
        {url.map((logement) => (
          <div key={logement.id}>
            <div className="description">
              <div className="description-header">
                <div className="description_title">
                  <h1>{logement.title}</h1>
                  <span>{logement.location}</span>
                </div>
                <div className="description_host">
                  <span className="description_host-name">
                    {logement.host.name}
                  </span>
                  <img src={logement.host.picture} alt="portrait de l'hôte" />
                </div>
              </div>
              <div className="description-footer">
                <div className="description-footer_tag">
                  {logement.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="rate">
                  {[...Array(5)].slice(5 - logement.rating).map((star) => (
                    <img alt="étoile" src={starActive} key={star} />
                  ))}
                  {[...Array(5)].slice(logement.rating).map((star) => (
                    <img alt="étoile" src={starInactive} key={star} />
                  ))}
                </div>
              </div>
            </div>
            <div className="details">
              <Collapse
                logement={logement}
                title="Description"
                content={logement.description}
              />
              <Collapse logement={logement} title="Equipements" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Logement;
