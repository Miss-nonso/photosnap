import React from "react";

import TextLink from "./TextLink";

const TextContainer = ({ heading, paraText, linkText, linkHref, bgcolor }) => {
  return (
    <div className={`grid-text ${bgcolor === "white" && "grid-text-white"}`}>
      <div className="grid-text-content">
        <h2
          style={{
            textTransform: "uppercase",
            fontWeight: "800",
            letterSpacing: "4.17px",
            lineHeight: "48px"
          }}
          className="text-[2.5rem]"
        >
          {heading[0]} <br /> {heading[1]} <br /> {heading[2] ? heading[2] : ""}{" "}
        </h2>
        <p>{paraText}</p>
        <TextLink linkText={linkText} href={linkHref} bgcolor={bgcolor} />
      </div>
    </div>
  );
};

export default TextContainer;
