import React from "react";
import Carrousel from "../components/logement/Carrousel";
import url from "../datas/logements.json";
import starActive from "../assets/star-active.svg";
import starInactive from "../assets/star-inactive.svg";
import Collapse from "../components/utils/Collapse";
import Header from "../components/header/Header";
import "../styles/logement/logement.css";

const Logement = () => {
  // const [data, setData] = useState(url);

  return (
    <>
      <Header />
      <div className="logement_container">
        <Carrousel>
          {url.map((logement) => (
            // console.log(logement.pictures[0])
            <img src={logement.pictures[0]} alt="logement" key={logement.id} />
            // <img src={logement.pictures[1]} alt="logement" />
            // <img src={logement.pictures[2]} alt="logement" />
            // <img src={logement.pictures[3]} alt="logement" />
          ))}
        </Carrousel>
        {url.slice(0, 1).map((logement) => (
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
                  <span className="tag">Batignolle</span>
                  <span className="tag">Montmartre</span>
                </div>
                <span className="rate">
                  <img src={starActive} alt="étoile active" />
                  <img src={starInactive} alt="étoile non active" />
                </span>
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
