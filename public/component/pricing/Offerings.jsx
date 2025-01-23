"use client";
import React from "react";
import FeaturesTable from "../FeaturesTable";
import { featuresTableData } from "@/public/assets/data/pricingData";
import MobileFeaturesTable from "../MobileFeaturesTable";
import { motion } from "framer-motion";

const Offerings = () => {
  return (
    <motion.section
      className="pricing-comparison"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.002,
        ease: "easeOut"
      }}
    >
      <h2 className="hidden md:block">Compare Features</h2>
      <FeaturesTable featuresData={featuresTableData} />
      <MobileFeaturesTable featuresData={featuresTableData} />
    </motion.section>
  );
};

export default Offerings;
