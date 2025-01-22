import React from "react";

const InfoSection = ({ infoSectionData }) => {
  return (
    <div className="info-section">
      <div className="info-content">
        {infoSectionData.map(({ icon, title, description }) => (
          <div key={title} className="info-item">
            <div className="info-img-wrapper">
              <img src={icon} alt="" />
            </div>
            <div className="info-text">
              <h6>{title}</h6> <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
