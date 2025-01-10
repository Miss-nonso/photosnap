import React from "react";
import Navbar from "@/public/component/Navbar";
import Footer from "@/public/component/Footer";
import StoriesHero from "@/public/component/stories/StoriesHero";
import ImageGrid from "@/public/component/ImageGrid";
import { imageGridData } from "@/public/assets/data/homeData";

const Stories = () => {
  return (
    <>
      <Navbar />
      <StoriesHero />
      <ImageGrid imageData={imageGridData} />
      <Footer />
    </>
  );
};

export default Stories;
