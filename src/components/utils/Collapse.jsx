import React, { useState } from "react";
import arrowUp from "../../assets/Vector_up.png";
import arrowDown from "../../assets/Vector_down.png";
import "../../styles/collapse.css";
// import url from "../../datas/logements.json";

const Collapse = ({ logement, title, content, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isEquip, setIsEquip] = useState("Equipements");
  // const [data, setData] = useState(url);

  return !isOpen ? (
    <div className="collapse_container" key={index}>
      <div className="collapse">
        {title}
        <img
          src={arrowUp}
          className="closeArrow"
          alt="flèche directionnelle"
          onClick={() => setIsOpen(true)}
        />
      </div>
      <div className="frame_closed">
        <p>{content}</p>
      </div>
    </div>
  ) : (
    <div className="collapse_container" key={index}>
      <div className="collapse">
        {title}
        <img
          src={arrowDown}
          className="openArrow"
          alt="flèche directionnelle"
          onClick={() => setIsOpen(false)}
        />
      </div>
      <div className="frame_open">
        {title === "Equipements" ? (
          <p>
            {logement.equipments.map((el, index) => (
              <li key={index} className="equipments_elements">
                {el}
              </li>
            ))}
          </p>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
};

export default Collapse;
