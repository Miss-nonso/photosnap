import React from "react";
import { homeInfoSectionData } from "@/public/assets/data/homeData";

const InfoSection = () => {

  return (
    <section className="info-section">
      <div className="info-content">
        {homeInfoSectionData.map(({ icon, title, description }) => (
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
    </section>
  );
};

export default InfoSection;
