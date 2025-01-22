import React from "react";
import FeaturesTable from "../FeaturesTable";
import { featuresTableData } from "@/public/assets/data/pricingData";
import MobileFeaturesTable from "../MobileFeaturesTable";

const Offerings = () => {
  return (
    <section className="pricing-comparison">
      <h2 className="hidden md:block">Compare Features</h2>
      <FeaturesTable featuresData={featuresTableData} />
      <MobileFeaturesTable featuresData={featuresTableData} />
    </section>
  );
};

export default Offerings;
