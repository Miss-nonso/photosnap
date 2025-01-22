"use client";

import React, { useState } from "react";
import PricingToggle from "./PricingToggle";
import Card from "../Card";
import { monthlyPricingPlans } from "@/public/assets/data/pricingData";
import { yearlyPricingPlans } from "@/public/assets/data/pricingData";

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
      <div className="plans-container">
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
      </div>
    </div>
  );
};

export default PricingPlan;
