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
        {/* ----------- CARROUSEL ----------- */}
        <Carrousel>
          {url[0].pictures.map((picture) => (
            // console.log(logement.pictures[0])
            <img src={picture} alt="logement" key={picture} />
          ))}
        </Carrousel>

        {/* ----------- DESCRIPTION ----------- */}
        {url.map(
          ({
            id,
            title,
            location,
            host,
            tags,
            rating,
            equipments,
            description,
          }) => (
            <div key={id}>
              <div className="description">
                <div className="description-header">
                  <div className="description_title">
                    <h1>{title}</h1>
                    <span>{location}</span>
                  </div>
                  <div className="description_host">
                    <span className="description_host-name">{host.name}</span>
                    <img src={host.picture} alt="portrait de l'hôte" />
                  </div>
                </div>
                <div className="description-footer">
                  <div className="description-footer_tag">
                    {tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* ----------- RATING STARS ----------- */}
                  <div className="rate">
                    {[...Array(5)].slice(5 - rating).map((star) => (
                      <img alt="étoile" src={starActive} key={star} />
                    ))}
                    {[...Array(5)].slice(rating).map((star) => (
                      <img alt="étoile" src={starInactive} key={star} />
                    ))}
                  </div>
                </div>
              </div>

              {/* ----------- COLLAPSE ----------- */}
              <div className="details">
                <Collapse
                  title="Description"
                  content={description}
                  description={description}
                />
                <Collapse title="Equipements" equipments={equipments} />
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default Logement;
