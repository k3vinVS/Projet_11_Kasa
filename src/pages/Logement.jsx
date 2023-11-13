import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header/Header";
import Carrousel from "../components/logement/Carrousel";
import Collapse from "../components/utils/Collapse";
import Description from "../components/logement/Description";
import Error from "./Error";
import "../styles/logement/logement.css";

const Logement = () => {
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch("../logements.json")
      .then((res) => res.json())
      .then((data) => {
        const logement = data.find((logement) => logement.id === id);
        setData(logement);
      })
      .catch(console.error);
  }, [id, data]);

  // Si la page du logement n'est pas bonne -----
  if (!data) return <Error />;

  return (
    <>
      <Header />
      {/* ----------- LOGEMENT CONTAINER ----------- */}
      <div className="logement_container" key={data.id}>
        {/* ----------- CARROUSEL ----------- */}
        <Carrousel>
          {data.pictures.map((picture) => (
            <img src={picture} alt="logement" key={picture} />
          ))}
        </Carrousel>

        {/* ----------- DESCRIPTION ----------- */}
        <div>
          <Description data={data} />

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
