import React from "react";
import { Button } from "@/components/ui/button";

const Card = ({ plan, duration }) => {
  return (
    <div className="card">
      <h5>{plan.type}</h5>
      <p>{plan.about}</p>
      <div>
        {" "}
        <h6>${plan.amount}</h6>
        <p> {duration === "monthly" ? "per month" : "per year"}</p>
      </div>
      <div className="btn-wrapper">
        {" "}
        <Button className={`btn ${plan.type === "Pro" ? "btn-white" : ""}`}>
          PICK PLAN
        </Button>
      </div>
    </div>
  );
};

export default Card;
