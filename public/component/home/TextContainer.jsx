"use client";

import React from "react";
import TextLink from "./TextLink";
import { motion } from "framer-motion";

const TextContainer = ({
  heading,
  paraText,
  linkText,
  linkHref,
  bgcolor,
  showTextLink
}) => {
  return (
    <div className={`grid-text ${bgcolor === "white" && "grid-text-white"}`}>
      <motion.div
        className="grid-text-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.001,
          ease: "easeOut"
        }}
      >
        <h2
          style={{
            textTransform: "uppercase",
            fontWeight: "800",
            letterSpacing: "4.17px",
            lineHeight: "48px"
          }}
          className="text-[2.5rem]"
        >
          {heading[0]} <br /> {heading[1] ? heading[1] : ""} <br />{" "}
          {heading[2] ? heading[2] : ""}{" "}
        </h2>
        <p>{paraText}</p>
        {showTextLink && (
          <TextLink linkText={linkText} href={linkHref} bgcolor={bgcolor} />
        )}
      </motion.div>
    </div>
  );
};

export default TextContainer;
