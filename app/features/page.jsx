import React from "react";
import FeaturesHero from "@/public/component/features/FeaturesHero";
import Navbar from "@/public/component/Navbar";
import InfoSection from "@/public/component/home/InfoSection";
import { infoSectionData } from "@/public/assets/data/homeData";
import Invite from "@/public/component/Invite";
import Footer from "@/public/component/Footer";

export const metadata = {
  title: "Photosnap | Features - Powerful Tools for Creators",
  description:
    "Photosnap's features make storytelling easy. Discover the tools that help creators share their vision with the world.",
  image: "/assets/features/desktop/hero.jpg",
  url: "https://perfecto-photosnap.netlify.app/features",

  openGraph: {
    title: "Photosnap | Features - Powerful Tools for Creators",
    description:
      "Photosnap's features make storytelling easy. Discover the tools that help creators share their vision with the world.",
    url: "https://perfecto-photosnap.netlify.app/features",
    images: ["/assets/features/desktop/hero.jpg"]
  },
  twitter: {
    card: "/assets/features/desktop/hero.jpg",
    title: "Photosnap | Features - Powerful Tools for Creators",
    description:
      "Photosnap's features make storytelling easy. Discover the tools that help creators share their vision with the world.",
    images: ["/assets/features/desktop/hero.jpg"]
  }
};

const Features = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
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
