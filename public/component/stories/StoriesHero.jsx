import React from "react";
import { storiesHeroData } from "@/public/assets/data/storiesData";
import TextLink from "../home/TextLink";

const StoriesHero = () => {
  return (
    <div className="stories-hero-img">
      <div className="stories-hero-overlay"></div>
      {/* <div className=""> */}{" "}
      {storiesHeroData.map(
        ({ subHeading, heading, date, author, description }, index) => (
          <div key={index} className="stories-hero-content-wrapper">
            <h5>{subHeading}</h5>
            <h1>{heading}</h1>
            <div className="date-and-author">
              <p> {date}</p> <span className="author">by {author}</span>
            </div>
            <p className="description">{description}</p>
            <TextLink linkText="READ THE STORY" href="#" bgcolor="black" />
          </div>
        )
      )}
    </div>
    // </div>
  );
};

export default StoriesHero;
