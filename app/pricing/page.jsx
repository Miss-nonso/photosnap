import React from "react";
import Navbar from "@/public/component/Navbar";
import PricingHero from "@/public/component/pricing/PricingHero";
import PricingToggle from "@/public/component/pricing/PricingToggle";
import PricingPlan from "@/public/component/pricing/PricingPlan";
import Offerings from "@/public/component/pricing/Offerings";
import Invite from "@/public/component/Invite";
import Footer from "@/public/component/Footer";

export const metadata = {
  title: "Photosnap | Pricing - Choose the Perfect Plan",
  description:
    "Find the perfect plan for your storytelling needs. Photosnap offers flexible pricing for creators of all levels.",
  image: "/assets/pricing/desktop/hero.jpg",
  url: "https://perfecto-photosnap.netlify.app/pricing",

  openGraph: {
    title: "Photosnap | Pricing - Choose the Perfect Plan",
    description:
      "Find the perfect plan for your storytelling needs. Photosnap offers flexible pricing for creators of all levels.",
    url: "https://perfecto-photosnap.netlify.app/pricing",
    images: ["/assets/pricing/desktop/hero.jpg"]
  },
  twitter: {
    card: "/assets/pricing/desktop/hero.jpg",
    title: "Photosnap | Pricing - Choose the Perfect Plan",
    description:
      "Find the perfect plan for your storytelling needs. Photosnap offers flexible pricing for creators of all levels.",
    images: ["/assets/pricing/desktop/hero.jpg"]
  }
};

const Pricing = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col ">
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
