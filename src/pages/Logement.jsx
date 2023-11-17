import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/header/Header";
import Carrousel from "../components/logement/Carrousel";
import Collapse from "../components/utils/Collapse";
import Description from "../components/logement/Description";
import "../styles/logement/logement.css";
import Footer from "../components/footer/Footer";

const Logement = () => {
  const [data, setData] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("../logements.json")
      .then((res) => res.json())
      .then((data) => {
        const logement = data.find((logement) => logement.id === id);
        setData(logement);
        if (!logement) {
          navigate("*", { replace: false });
        }
      })
      .catch(console.error);
  }, [id, navigate]);

  // Chargement de page -----
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <Header />
      {/* ----------- LOGEMENT CONTAINER ----------- */}
      <div className="logement-container" key={data.id}>
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
      <Footer />
    </>
  );
};

export default Logement;
