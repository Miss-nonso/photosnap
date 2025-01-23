"use client";
import React from "react";
import { motion } from "framer-motion";

const InfoSection = ({ infoSectionData }) => {
  return (
    <div className="info-section">
      <div className="info-content">
        {infoSectionData.map(({ icon, title, description }) => (
          <motion.div
            key={title}
            className="info-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.001,
              ease: "easeOut"
            }}
          >
            <div className="info-img-wrapper">
              <img src={icon} alt="" />
            </div>
            <div className="info-text">
              <h6>{title}</h6> <p>{description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
