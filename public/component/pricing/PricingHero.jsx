import React from "react";
import TextContainer from "../home/TextContainer";
import ImgContainer from "../home/ImgContainer";

const PricingHero = () => {
  return (
    <div
      className="grid"
      style={{
        width: "100%"
      }}
    >
      <div className={`home-grid-layout`}>
        <TextContainer
          heading={["PRICING"]}
          paraText="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
          //   bgcolor={index !== 0 ? "white" : "bleck"}
          showTextLink={false}
        />
        <ImgContainer imgClassname="pricing-hero" />
      </div>
    </div>
  );
};

export default PricingHero;
