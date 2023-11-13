import React, { useEffect, useRef, useState } from "react";
import arrowUp from "../../assets/Vector_up.png";
import arrowDown from "../../assets/Vector_down.png";
import "../../styles/collapse.css";
// import url from "../../datas/logements.json";

const Collapse = ({ title, content, equipments, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState();

  const refHeight = useRef();

  const showContent = () => {
    setIsOpen(!isOpen);
  };
  const showContentClass = isOpen ? "content visible" : "content";

  useEffect(() => {
    setHeight(`${refHeight.current.scrollHeight}px`);
  }, []);

  return (
    <div className="collapse_container" key={index}>
      <div className="collapse">
        {title}
        <img
          src={isOpen ? arrowDown : arrowUp}
          className={isOpen ? "closeArrow" : "openArrow"}
          alt="flèche directionnelle"
          onClick={showContent}
        />
      </div>
      <div
        className={showContentClass}
        ref={refHeight}
        style={{ height: isOpen ? `${height}` : "0px" }}
      >
        {title === "Equipements" ? (
          <p>
            {equipments.map((el, index) => (
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
