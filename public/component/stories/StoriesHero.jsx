import React from "react";
import { storiesHeroData } from "@/public/assets/data/storiesData";
import TextLink from "../home/TextLink";

const StoriesHero = () => {
  return (
    <>
      {" "}
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
      <div className={`grid-text stories-hero-mobile`}>
        <div className="grid-text-content">
          <h5 style={{}}> {storiesHeroData[0].subHeading}</h5>
          <h2
            style={{
              textTransform: "uppercase",
              fontWeight: "800",
              letterSpacing: "4.17px",
              lineHeight: "48px"
            }}
            className="text-[2.5rem]"
          >
            {storiesHeroData[0].heading}
          </h2>
          <p>{storiesHeroData[0].description}</p>
          <TextLink linkText="READ THE STORY" href="#" bgcolor="black" />
        </div>
        {/* 
        <div className="grid-text stories-hero-mobile">
          <h2
            style={{
              textTransform: "uppercase",
              fontWeight: "800",
              letterSpacing: "4.17px",
              lineHeight: "48px"
            }}
          >
            {" "}
            {storiesHeroData[0].subHeading}
          </h2>
          <h1> {storiesHeroData[0].heading}</h1>
          <div className="date-and-author">
            <p> {storiesHeroData[0].date}</p>{" "}
            <span className="author">by {storiesHeroData[0].author}</span>
          </div>
          <p className="description">{storiesHeroData[0].description}</p>
          <TextLink linkText="READ THE STORY" href="#" bgcolor="black" />
        </div> */}
      </div>
    </>
  );
};

export default StoriesHero;
