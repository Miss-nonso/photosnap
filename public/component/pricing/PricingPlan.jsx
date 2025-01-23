"use client";

import React, { useState } from "react";
import PricingToggle from "./PricingToggle";
import Card from "../Card";
import { monthlyPricingPlans } from "@/public/assets/data/pricingData";
import { yearlyPricingPlans } from "@/public/assets/data/pricingData";
import { motion } from "framer-motion";

const PricingPlan = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="pricing-section">
      <div className={`pricing-toggle`}>
        <p className={`toggle-text ${!isToggled && "active"}`}>Monthly</p>
        <div
          className={`toggle-wrapper ${isToggled && "toggled"} `}
          onClick={() => {
            setIsToggled(!isToggled);
          }}
        >
          <div className="toggle-btn"></div>
        </div>
        <p className={`toggle-text ${isToggled && "active"}`}>Yearly</p>
      </div>
      <motion.div
        className="plans-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.001,
          ease: "easeOut"
        }}
      >
        {isToggled
          ? yearlyPricingPlans.map((plan, index) =>
              index === 1 ? (
                <div className="pro-card" key={plan.amount}>
                  <Card plan={plan} duration="yearly" />
                </div>
              ) : (
                <Card plan={plan} key={plan.amount} duration="yearly" />
              )
            )
          : monthlyPricingPlans.map((plan, index) =>
              index === 1 ? (
                <div className="pro-card" key={plan.amount}>
                  <Card plan={plan} duration="monthly" />
                </div>
              ) : (
                <Card plan={plan} key={plan.amount} duration="monthly" />
              )
            )}
      </motion.div>
    </div>
  );
};

export default PricingPlan;
