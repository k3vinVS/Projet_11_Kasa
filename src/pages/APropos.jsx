import React from "react";
import BodyPicture from "../components/body/BodyPicture";
import Collapse from "../components/utils/Collapse";
import Header from "../components/header/Header";
import "../styles/aPropos/aPropos_container.css";

const APropos = ({ logement, index }) => {
  const fiability =
    "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.";
  const respectService =
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discrimatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
  const security =
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

  return (
    <>
      <Header />
      <div className="aPropos_container">
        <BodyPicture />
        <Collapse
          key={index}
          logement={logement}
          title="Fiabilité"
          content={fiability}
        />
        <Collapse
          key={index}
          logement={logement}
          title="Respect"
          content={respectService}
        />
        <Collapse
          key={index}
          logement={logement}
          title="Service"
          content={respectService}
        />
        <Collapse
          key={index}
          logement={logement}
          title="Sécurité"
          content={security}
        />
      </div>
    </>
  );
};

export default APropos;
