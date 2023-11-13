import React from "react";
import Rating from "./Rating";
import "../../styles/logement/logement.css";

const Description = ({ data }) => {
  return (
    <div>
      <div className="description">
        <div className="description-layout_left">
          <div className="description-title">
            <h1>{data.title}</h1>
            <span>{data.location}</span>
          </div>
          <div className="description-tag">
            {data.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="description-layout_right">
          <div className="description-host">
            <span className="description-host_name">{data.host.name}</span>
            <img src={data.host.picture} alt="portrait de l'hôte" />
          </div>
          {/* ----------- RATING STARS ----------- */}
          <div className="rate">
            <Rating data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
