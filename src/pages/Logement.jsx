import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header/Header";
import Carrousel from "../components/logement/Carrousel";
import starActive from "../assets/star-active.svg";
import starInactive from "../assets/star-inactive.svg";
import Collapse from "../components/utils/Collapse";
import "../styles/logement/logement.css";
// import logements from "../datas/logements.json";

const Logement = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch("../logements.json")
      .then((res) => res.json())
      .then((data) => {
        const logement = data.find((logement) => logement.id === id);
        setData(logement);
      })
      .catch(console.error);
  }, [id]);

  if (data === null) return <div>Loading...</div>;
  // console.log(data[0].pictures);

  const stars = [1, 2, 3, 4, 5];

  return (
    <>
      <Header />
      {/* ----------- LOGEMENT CONTAINER ----------- */}
      <div className="logement_container" key={data.id}>
        {/* ----------- CARROUSEL ----------- */}
        <Carrousel>
          {data.pictures.map((picture) => (
            // console.log(logement.pictures[0])
            <img src={picture} alt="logement" key={picture} />
          ))}
        </Carrousel>
        {/* ----------- DESCRIPTION ----------- */}
        <div key={data.id}>
          <div className="description">
            <div className="description-header">
              <div className="description_title">
                <h1>{data.title}</h1>
                <span>{data.location}</span>
              </div>
              <div className="description_host">
                <span className="description_host-name">{data.host.name}</span>
                <img src={data.host.picture} alt="portrait de l'hôte" />
              </div>
            </div>
            <div className="description-footer">
              <div className="description-footer_tag">
                {data.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* ----------- RATING STARS ----------- */}
              <div className="rate">
                {/* {[...Array(5)].slice(5 - data.rating).map((index) => (
                  <img alt="étoile" src={starActive} key={index * 10 + 1} />
                ))}
                {[...Array(5)].slice(data.rating).map((index) => (
                  <img alt="étoile" src={starInactive} key={index * 20 + 2} />
                ))} */}
                {stars.map((index, star) => (
                  <img
                    alt="étoile"
                    src={data.rating > star ? starActive : starInactive}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ----------- COLLAPSE ----------- */}
          <div className="details">
            <Collapse
              title="Description"
              content={data.description}
              description={data.description}
            />
            <Collapse title="Equipements" equipments={data.equipments} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Logement;
