import React from "react";
import TextContainer from "@/public/component/home/TextContainer";
import ImgContainer from "@/public/component/home/ImgContainer";

const FeaturesHero = () => {
  return (
    <div
      className="grid"
      style={{
        width: "100%"
      }}
    >
      <div className={`home-grid-layout `}>
        <TextContainer
          heading={["FEATURES"]}
          paraText="We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
          linkText=""
          linkHref=""
          bgcolor="bleck"
          showTextLink={false}
        />
        <ImgContainer imgClassname="features-hero" />
      </div>
    </div>
  );
};

export default FeaturesHero;
