import React from "react";
import Navbar from "@/public/component/Navbar";
import PricingHero from "@/public/component/pricing/PricingHero";
import PricingToggle from "@/public/component/pricing/PricingToggle";
import PricingPlan from "@/public/component/pricing/PricingPlan";
import Offerings from "@/public/component/pricing/Offerings";
import Invite from "@/public/component/Invite";
import Footer from "@/public/component/Footer";

const Pricing = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col mt-[4.5rem]">
        {" "}
        <PricingHero />
        <PricingPlan />
        <Offerings />
        <Invite />
      </main>
      <Footer />
    </>
  );
};

export default Pricing;
