import React from 'react';
import Rating from './Rating';
import "../../styles/logement/logement.css";


const Description = ({data}) => {
    return (
        <div>
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
                <Rating data={data} />
              </div>
            </div>
          </div>
        </div>
    );
};

export default Description;