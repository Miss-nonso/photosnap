import React from "react";
import FeaturesHero from "@/public/component/features/FeaturesHero";
import Navbar from "@/public/component/Navbar";
import InfoSection from "@/public/component/home/InfoSection";
import { infoSectionData } from "@/public/assets/data/homeData";
import Invite from "@/public/component/Invite";
import Footer from "@/public/component/Footer";

const Features = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col mt-[4.5rem]">
        <FeaturesHero />
        <section className="features-info-section">
          <InfoSection infoSectionData={infoSectionData} />
        </section>

        <Invite />
      </main>
      <Footer />
    </>
  );
};

export default Features;
