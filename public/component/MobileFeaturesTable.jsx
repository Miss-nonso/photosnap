import React from "react";

const MobileFeaturesTable = ({ featuresData }) => {
  return (
    <div className="mobile-features-section">
      {" "}
      <div className="mobile-features-heading">
        <h5>THE FEATURES</h5>
      </div>
      <div className="mobile-features-content">
        {" "}
        {featuresData.map((item, index) => (
          <div key={index} className="mobile-features-item">
            <h6>{item.feature}</h6>
            <div className="mobile-features-checkmark-wrapper">
              <div className="item">
                <p>BASIC</p>
                <div className="checkmark">{item.basic && "✔️"}</div>
              </div>
              <div className="item">
                {" "}
                <p>PRO</p> <div className="checkmark">{item.pro && "✔️"}</div>
              </div>
              <div className="item">
                {" "}
                <p>BUSINESS</p>{" "}
                <div className="checkmark">{item.business && "✔️"}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileFeaturesTable;
